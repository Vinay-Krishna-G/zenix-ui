#!/usr/bin/env node

import { Command } from 'commander';
import { init } from './commands/init';
import { add } from './commands/add';

const program = new Command();

program
  .name('zenix-ui')
  .description('Distribute and install entire ZenixUI experiences.')
  .version('0.0.1');

program
  .command('init')
  .description('Initialize your project and install ZenixUI dependencies.')
  .action(init);

program
  .command('add <experience-id>')
  .description('Add a complete experience to your project.')
  .action(add);

program.parse();
