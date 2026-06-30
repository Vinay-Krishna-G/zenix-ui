import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import path from 'path';
import { add } from './add';

export async function compose() {
  const composePath = path.join(process.cwd(), 'zenix.compose.ts');
  
  if (!fs.existsSync(composePath)) {
    console.log(chalk.red('Error: zenix.compose.ts not found in the current directory.'));
    process.exit(1);
  }

  const spinner = ora('Reading compose file...').start();
  
  try {
    // Basic mock parser for compose file since we cannot dynamically import TypeScript easily in simple node script
    // In production, we'd use a tool like esbuild or tsx to read the compose file natively.
    const fileContent = fs.readFileSync(composePath, 'utf-8');
    
    // We'll just extract the components using a regex for demonstration purposes
    const componentsMatch = fileContent.match(/components:\s*\[([\s\S]*?)\]/);
    if (!componentsMatch) {
      spinner.fail('No components array found in zenix.compose.ts');
      process.exit(1);
    }
    
    const ids = [];
    const idRegex = /id:\s*['"]([^'"]+)['"]/g;
    let match;
    while ((match = idRegex.exec(componentsMatch[1])) !== null) {
      ids.push(match[1]);
    }

    const modeMatch = fileContent.match(/mode:\s*['"](native|recipe|isolated)['"]/);
    const mode = modeMatch ? modeMatch[1] : 'isolated';

    spinner.succeed(`Found ${ids.length} component(s) in compose file. Mode: ${mode}`);

    // Install each component sequentially
    for (const id of ids) {
      console.log(`\n${chalk.cyan('➜')} Installing ${chalk.bold(id)} via compose...`);
      // We pass skipExisting false, and let it prompt or we could pass true
      await add(id, { skipExisting: false, mode });
    }
    
    console.log(chalk.green('\n✔ Compose installation complete.'));

  } catch (err: any) {
    spinner.fail(`Failed to parse or run compose file: ${err.message}`);
    process.exit(1);
  }
}
