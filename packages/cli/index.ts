#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { romanize as romanizeKorean } from '@romanize/korean';


const argv = yargs(hideBin(process.argv))
  .command('korean [hangul]', 'romanize korean hangul', (yargs) => {
    return yargs.positional('hangul', {
      type: 'string',
      describe: 'korean hangul',
    }).demandOption('hangul');
  }, (argv) => {
    console.log(romanizeKorean(argv.hangul));
  }).strictCommands().demandCommand(1).parse();
