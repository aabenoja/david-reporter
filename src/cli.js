import getDependencies from './getDependencies';
import simpleReport from './simple-report';
var manifest = require(`${process.cwd()}/package.json`);

getDependencies(manifest)
  .then(simpleReport);
