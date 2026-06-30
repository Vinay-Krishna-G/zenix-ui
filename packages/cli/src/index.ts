#!/usr/bin/env node

import { Command } from 'commander';
import { init } from './commands/init';
import { add } from './commands/add';
import { compose } from './commands/compose';

const program = new Command();

program
  .name('zenix-ui')
  .description('Distribute and install entire ZenixUI experiences.')
  .version('0.0.1');

program
  .command('init')
  .description('Initialize your project and install ZenixUI dependencies.')
  .option('-f, --framework <name>', 'Framework to use (next, vite, remix)')
  .option('-t, --theme <name>', 'Default theme (zenix, ocean, midnight, autumn)')
  .option('-d, --dir <path>', 'Experiences directory (default: src/experiences)')
  .option('-y, --yes', 'Skip prompts and use defaults/flags')
  .action(init);

program
  .command('add <experience-id>')
  .description('Add a complete experience to your project.')
  .option('-o, --overwrite', 'Overwrite existing files')
  .option('-s, --skip-existing', 'Skip existing files instead of overwriting')
  .option('-m, --mode <type>', 'Adaptation mode (native, recipe, isolated)', 'isolated')
  .action(add);

program
  .command('compose')
  .description('Install components configured in zenix.compose.ts.')
  .action(compose);

program.parse();
