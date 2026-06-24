import prompts from 'prompts';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

export async function init() {
  console.log(chalk.bold.blue('\nWelcome to ZenixUI Experience distribution.\n'));
  
  const response = await prompts([
    {
      type: 'select',
      name: 'framework',
      message: 'Which framework are you using?',
      choices: [
        { title: 'Next.js', value: 'next' },
        { title: 'Vite', value: 'vite' },
        { title: 'Remix', value: 'remix' }
      ]
    },
    {
      type: 'text',
      name: 'experiencesDir',
      message: 'Where should we place downloaded experiences?',
      initial: 'src/experiences'
    },
    {
      type: 'select',
      name: 'defaultTheme',
      message: 'Which theme would you like to use by default?',
      choices: [
        { title: 'Zenix', value: 'zenix' },
        { title: 'Ocean', value: 'ocean' },
        { title: 'Night City', value: 'night-city' },
        { title: 'Autumn', value: 'autumn' }
      ]
    }
  ]);

  if (!response.framework) {
    console.log(chalk.yellow('Installation cancelled.'));
    process.exit(0);
  }

  const spinner = ora('Installing core dependencies...').start();
  
  try {
    const pm = process.env.npm_execpath?.includes('pnpm') ? 'pnpm' : process.env.npm_execpath?.includes('yarn') ? 'yarn' : 'npm';
    const installCmd = pm === 'npm' ? 'npm install' : `${pm} add`;
    execSync(`${installCmd} @zenixui/react @zenixui/core @zenixui/components`, { stdio: 'ignore' });
    spinner.succeed('Installed core dependencies.');
  } catch (err) {
    spinner.warn('Failed to auto-install dependencies. You may need to run `npm install @zenixui/react @zenixui/core @zenixui/components` manually.');
  }

  const configPath = path.join(process.cwd(), 'zenix.json');
  fs.writeFileSync(configPath, JSON.stringify({
    framework: response.framework,
    experiencesDir: response.experiencesDir,
    defaultTheme: response.defaultTheme
  }, null, 2));

  // Ensure experiences dir exists
  const expPath = path.join(process.cwd(), response.experiencesDir);
  if (!fs.existsSync(expPath)) {
    fs.mkdirSync(expPath, { recursive: true });
  }

  console.log(chalk.green(`\nSuccess! ZenixUI is configured.`));
  console.log(`\nNext steps:`);
  console.log(`1. Wrap your root layout with ${chalk.cyan('<Experience preset="' + response.defaultTheme + '">')}`);
  console.log(`2. Run ${chalk.cyan('npx zenix-ui add night-city-portfolio')} to add your first experience.\n`);
}
