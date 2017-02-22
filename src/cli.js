import yargs from 'yargs';
import getDependencies from './getDependencies';
import getReporter from './getReporter';
const manifest = require(`${process.cwd()}/package.json`);

const argv = yargs
  .alias('r', 'reporter')
  .describe('r', 'provide a custom reporter')
  .string('r')
  .argv;

const reporter = getReporter(argv.r);

getDependencies(manifest).then(reporter).catch(() => {});
