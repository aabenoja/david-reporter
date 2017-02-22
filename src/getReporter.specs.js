import { expect } from 'chai';
import path from 'path';
import getReporter from './getReporter';
import simpleReport from './simple-report';

describe('getReporter', () => {
  it('defaults to providing the simple reporter if no reporter arg provided', () => {
    expect(getReporter()).to.equal(simpleReport);
  });

  it('pulls a reporter based on path from cwd', () => {
    const reporter = require(path.join(process.cwd(), './src/simple-report.js'));
    expect(getReporter('./src/simple-report.js')).to.equal(reporter);
  });
});
