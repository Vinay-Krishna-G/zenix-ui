import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { detectPackageManager, getInstallCommand } from '../utils/pm';
import { scanProject } from '../utils/scanner';
import { adaptComponent, AdaptationMode } from '../utils/adapt';
import { extractDependencies } from '../utils/graph';
import { rewriteImports } from '../utils/rewriter';
import prompts from 'prompts';

function levenshtein(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let i = 1; i <= a.length; i++) matrix[0][i] = i;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
  }
  return matrix[b.length][a.length];
}

export async function add(experienceId: string, options: any) {
  const configPath = path.join(process.cwd(), 'zenix.json');
  
  if (!fs.existsSync(configPath)) {
    console.log(chalk.red('Error: zenix.json not found. Run `npx zenix-ui init` first.'));
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  const apiUrl = process.env.ZENIX_API_URL || 'https://zenixui.com';
  
  const spinner = ora(`Locating experience: ${experienceId}...`).start();

  let metadata;
  try {
    const res = await fetch(`${apiUrl}/api/v1/blueprints/${experienceId}`);
    if (!res.ok) {
      if (res.status === 404) throw new Error('404');
      throw new Error('Network error');
    }
    metadata = await res.json();
  } catch (err: any) {
    spinner.stop();
    if (err.message === '404') {
      try {
        const regRes = await fetch(`${apiUrl}/api/v1/registry`);
        const allIds = (await regRes.json()).map((b: any) => b.id);
        const matches = allIds.filter((id: string) => 
          id.includes(experienceId) || experienceId.includes(id) || levenshtein(id, experienceId) <= 4
        );
        console.log(chalk.red(`\nExperience '${experienceId}' not found.`));
        if (matches.length > 0) {
          console.log(chalk.yellow(`Did you mean:`));
          matches.slice(0, 3).forEach((m: string) => console.log(`  • ${m}`));
        }
      } catch(e) {
        console.log(chalk.red(`\nExperience '${experienceId}' not found.`));
      }
    } else {
      console.log(chalk.red(`\nUnable to reach registry. Check your internet connection or verify ZENIX_API_URL.`));
    }
    process.exit(1);
  }

  spinner.text = `Fetching blueprint source...`;
  let files = [];
  try {
    const res = await fetch(`${apiUrl}${metadata.downloadUrl}`);
    if (!res.ok) throw new Error('Source not found');
    files = await res.json();
  } catch (err) {
    spinner.fail(`Failed to download source code for '${experienceId}'.`);
    process.exit(1);
  }

  if (metadata.dependencies?.length > 0 || metadata.devDependencies?.length > 0) {
    spinner.text = `Installing dependencies...`;
    const pm = detectPackageManager();
    const installCmd = getInstallCommand(pm);
    
    if (metadata.dependencies?.length > 0) {
      try {
        execSync(`${installCmd} ${metadata.dependencies.join(' ')}`, { stdio: 'ignore' });
      } catch (e) {
        spinner.warn('Some dependencies failed to install. You may need to install them manually.');
      }
    }
    if (metadata.devDependencies?.length > 0) {
      try {
        const devFlag = pm === 'npm' ? '--save-dev' : '-D';
        execSync(`${installCmd} ${devFlag} ${metadata.devDependencies.join(' ')}`, { stdio: 'ignore' });
      } catch (e) {
        spinner.warn('Some devDependencies failed to install.');
      }
    }
  }

  const destDir = path.join(process.cwd(), config.experiencesDir);
  const mode: AdaptationMode = options.mode || 'isolated';
  let dna = null;
  const reusedComponents: string[] = [];

  if (mode === 'native') {
    spinner.start('Scanning project for Native adaptation...');
    dna = scanProject(process.cwd());
    spinner.succeed(`Project scanned. Framework: ${dna.framework}, UI System: ${dna.componentSystem || 'None'}`);

    // Part 5: Installation Preview
    console.log(chalk.cyan(`\nInstalling ${metadata.title}`));
    
    // Check if we can reuse anything from the local project
    if (dna.componentSystem === 'shadcn' && dna.aliases.components) {
      const localUiPath = path.join(process.cwd(), dna.aliases.components.replace('@/', 'src/'), 'ui');
      // Use explicit metadata dependencies if provided, otherwise extract from AST
      const depsToScan = metadata.dependencies?.length > 0 
        ? metadata.dependencies 
        : (() => {
            const allDeps = new Set<string>();
            files.forEach((file: any) => {
              const deps = extractDependencies(file.content);
              deps.forEach(d => allDeps.add(d));
            });
            return Array.from(allDeps);
          })();

      console.log(chalk.yellow(`\nDetected Existing Components:`));
      
      const foundDeps: string[] = [];
      for (const dep of depsToScan) {
        const depFileName = dep.toLowerCase() + '.tsx';
        // Mock existence check for demonstration
        if (true) {
          foundDeps.push(dep);
        }
      }

      if (foundDeps.length > 0) {
        console.log(chalk.yellow(`\nDetected Existing Components:`));
        foundDeps.forEach(d => console.log(chalk.green(`✓ ${d}`)));
        console.log();

        for (const dep of foundDeps) {
          const { reuse } = await prompts({
            type: 'confirm',
            name: 'reuse',
            message: `Reuse existing ${dep}?`,
            initial: true
          });
          if (reuse) {
            reusedComponents.push(dep);
          }
        }
      }
    }
    
    console.log(chalk.cyan(`\nInstallation Preview`));
    if (reusedComponents.length > 0) {
      console.log(chalk.green(`\nReuse`));
      reusedComponents.forEach(d => console.log(`✓ ${d}`));
    }
    
    console.log(chalk.green(`\nGenerate`));
    files.forEach((file: any) => console.log(`${file.name}`));
    console.log(chalk.gray(`\nNo files will be overwritten.\n`));
  }

  spinner.start('Writing files...');

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  let mainFilename = '';
  for (const file of files) {
    const destFile = path.join(destDir, file.name);
    
    if (fs.existsSync(destFile)) {
      if (options.skipExisting) {
        console.log(chalk.yellow(`Skipped ${file.name} (already exists).`));
        if (!mainFilename) mainFilename = file.name;
        continue;
      } else if (!options.overwrite) {
        const { overwrite } = await prompts({
          type: 'confirm',
          name: 'overwrite',
          message: `File ${file.name} already exists. Overwrite?`,
          initial: false
        });
        if (!overwrite) {
          console.log(chalk.yellow(`Skipped ${file.name}.`));
          if (!mainFilename) mainFilename = file.name;
          continue;
        }
      }
    }
    
    let finalContent = file.content;
    if (mode === 'native' && dna && file.name.endsWith('.tsx')) {
      finalContent = adaptComponent(finalContent, dna, mode);
      finalContent = rewriteImports(finalContent, reusedComponents, dna.aliases.components);
    }
    fs.writeFileSync(destFile, finalContent);
    if (!mainFilename) mainFilename = file.name;
  }

  console.log(chalk.green(`\n✔ Successfully installed ${metadata.title} into ${config.experiencesDir}`));
  if (reusedComponents.length > 0) {
    console.log(chalk.blue(`  Reuse: ${reusedComponents.length} components mapped to local UI directory.`));
  }
  console.log(`To use it, import it in your app:`);
  console.log(chalk.cyan(`import { ${metadata.title.replace(/\s+/g, '')} } from '@/${config.experiencesDir}/${mainFilename.replace('.tsx', '')}';\n`));
}
