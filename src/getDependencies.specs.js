import { expect } from 'chai';
import getDependencies from './getDependencies';

var manifest = require('../package.json');

describe('getDependencies', () => {
  it('grabs all dependencies', () => {
    const totalCount = Object.keys(manifest.dependencies).length
      + Object.keys(manifest.devDependencies).length;

    return getDependencies(manifest).then(({ deps, devDeps }) => {
      const allDeps = Object.assign({}, deps, devDeps);
      return Object.keys(allDeps).length;
    }).then(found => expect(found).to.equal(totalCount));
  });
});
