import yargs from 'yargs';
import getDependencies from './getDependencies';
import getReporter from './getReporter';
import parseTargetOptions from './parseTargetOptions';
import cliArgs from './cli-args';

const manifest = require(`${process.cwd()}/package.json`);

const reporter = getReporter(cliArgs.r);
const targets = parseTargetOptions(cliArgs);

getDependencies(manifest, targets).then(reporter).catch(() => {});
