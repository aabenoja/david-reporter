'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var yargs = _interopDefault(require('yargs'));
var david = require('david');
var path = _interopDefault(require('path'));

function getDependenciesAsPromised(manifest, opts = {}) {
  return new Promise((resolve, reject) => {
    david.getDependencies(manifest, opts, (err, deps) => {
      if (err) return reject(err);

      resolve(deps);
    });
  });
}

function getAllDependencies(manifest) {
  return Promise.all([getDependenciesAsPromised(manifest), getDependenciesAsPromised(manifest, { dev: true })]).then(results => results.map(deps => Object.keys(deps).reduce((result, key) => {
    const dep = deps[key];
    result[key] = Object.assign({}, dep, { isUpdated: david.isUpdated(dep) });
    return result;
  }, {}))).then(([deps, devDeps]) => {
    return { deps, devDeps };
  });
}

function simpleReport({ deps, devDeps }) {
  const allDeps = Object.assign({}, deps, devDeps);
  const keys = Object.keys(allDeps);
  const outdatedCount = keys.reduce((total, key) => total + (david.isUpdated(allDeps[key]) ? 1 : 0), 0);
  console.log(`${keys.length} dependencies found`);
  console.log(`${outdatedCount} out of date`);
}

function getReporter(reporterPath) {
  if (!reporterPath) return simpleReport;
  if (!/^\.{1,2}\//.test(reporterPath)) return require(reporterPath);
  return require(path.join(process.cwd(), reporterPath));
}

const manifest = require(`${process.cwd()}/package.json`);

const argv = yargs.alias('r', 'reporter').describe('r', 'provide a custom reporter').string('r').argv;

const reporter = getReporter(argv.r);

getAllDependencies(manifest).then(reporter).catch(() => {});
