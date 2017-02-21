#!/usr/bin/env node
var { getDependencies, isUpdated } = require('david');
var manifest = require(`${process.cwd()}/package.json`);

getDependencies(manifest, (err, deps) => {
  const keys = Object.keys(deps);
  const outdatedCount = keys.reduce((total, key) => total + (isUpdated(deps[key]) ? 1 : 0), 0);
  console.log(`${keys.length} dependencies found`);
  console.log(`${outdatedCount} out of date`);
});
