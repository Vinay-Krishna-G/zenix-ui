import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import path from 'path';

// For local development, we point directly to the blueprints registry file built earlier
// In a real published version, we would fetch this from an HTTP registry endpoint!
const REGISTRY_PATH = path.join(__dirname, '../../blueprints/dist/registry.json');

export async function add(experienceId: string) {
  const configPath = path.join(process.cwd(), 'zenix.json');
  
  if (!fs.existsSync(configPath)) {
    console.log(chalk.red('Error: zenix.json not found. Run `npx zenix-ui init` first.'));
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  const spinner = ora(`Locating experience: ${experienceId}...`).start();

  let registry: any[] = [];
  try {
    if (fs.existsSync(REGISTRY_PATH)) {
      registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf-8'));
    } else {
      throw new Error("Registry file not found locally.");
    }
  } catch (err) {
    spinner.fail('Failed to connect to experience registry.');
    process.exit(1);
  }

  const blueprint = registry.find(bp => bp.id === experienceId);

  if (!blueprint) {
    spinner.fail(`Experience '${experienceId}' not found in registry.`);
    process.exit(1);
  }

  spinner.text = `Installing ${blueprint.title}...`;

  // We are copying the entire source code into the user's project
  const destDir = path.join(process.cwd(), config.experiencesDir);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Infer filename from the component name, usually title without spaces + .tsx
  const filename = `${blueprint.title.replace(/\s+/g, '')}.tsx`;
  const destFile = path.join(destDir, filename);

  fs.writeFileSync(destFile, blueprint.sourceCode);

  spinner.succeed(chalk.green(`Successfully installed ${blueprint.title} into ${config.experiencesDir}/${filename}`));
  console.log(`\nTo use it, import it in your app:`);
  console.log(chalk.cyan(`import { ${blueprint.title.replace(/\s+/g, '')} } from '@/${config.experiencesDir}/${filename.replace('.tsx', '')}';`));
}
