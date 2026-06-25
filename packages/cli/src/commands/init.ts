import prompts from 'prompts';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { detectPackageManager, getInstallCommand } from '../utils/pm';

export async function init(options: any) {
  console.log(chalk.bold.blue('\nWelcome to ZenixUI Experience distribution.\n'));
  
  let config = {
    framework: options.framework,
    experiencesDir: options.dir || 'src/experiences',
    defaultTheme: options.theme
  };

  if (!options.yes || !config.framework || !config.defaultTheme) {
    const response = await prompts([
      {
        type: config.framework ? null : 'select',
        name: 'framework',
        message: 'Which framework are you using?',
        choices: [
          { title: 'Next.js', value: 'next' },
          { title: 'Vite', value: 'vite' },
          { title: 'Remix', value: 'remix' }
        ]
      },
      {
        type: options.dir ? null : 'text',
        name: 'experiencesDir',
        message: 'Where should we place downloaded experiences?',
        initial: 'src/experiences'
      },
      {
        type: config.defaultTheme ? null : 'select',
        name: 'defaultTheme',
        message: 'Which theme would you like to use by default?',
        choices: [
          { title: 'Zenix', value: 'zenix' },
          { title: 'Ocean', value: 'ocean' },
          { title: 'Night City', value: 'midnight' },
          { title: 'Autumn', value: 'autumn' }
        ]
      }
    ]);

    config = {
      ...config,
      ...response,
      framework: config.framework || response.framework,
      experiencesDir: config.experiencesDir || response.experiencesDir,
      defaultTheme: config.defaultTheme || response.defaultTheme
    };
  }

  if (!config.framework) {
    console.log(chalk.yellow('Installation cancelled.'));
    process.exit(0);
  }

  const spinner = ora('Installing core dependencies...').start();
  
  try {
    const pm = detectPackageManager();
    const installCmd = getInstallCommand(pm);
    
    // Support local E2E testing without publishing
    const packages = process.env.ZENIX_LOCAL_TARBALLS
      ? '~/tarballs/zenixui-react-0.1.0.tgz ~/tarballs/zenixui-core-0.1.0.tgz ~/tarballs/zenixui-components-0.1.0.tgz'
      : '@zenixui/react @zenixui/core @zenixui/components';
      
    execSync(`${installCmd} ${packages}`, { stdio: 'ignore' });
    spinner.succeed(`Installed core dependencies using ${pm}.`);
  } catch (err) {
    spinner.warn('Failed to auto-install dependencies. You may need to install them manually.');
  }

  const configPath = path.join(process.cwd(), 'zenix.json');
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  // Ensure experiences dir exists
  const expPath = path.join(process.cwd(), config.experiencesDir);
  if (!fs.existsSync(expPath)) {
    fs.mkdirSync(expPath, { recursive: true });
  }

  console.log(chalk.green(`\nSuccess! ZenixUI is configured.`));
  console.log(`\nNext steps:`);
  console.log(`1. Wrap your root layout with ${chalk.cyan('<Experience preset="' + config.defaultTheme + '">')}`);
  console.log(`2. Run ${chalk.cyan('npx zenix-ui add midnight-portfolio')} to add your first experience.\n`);
}
