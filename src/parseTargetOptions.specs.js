import { expect } from 'chai';
import parseTargetOptions from './parseTargetOptions';

describe('parseTargetOptions', () => {
  it('creates a target object for each option', () => {
    const result = parseTargetOptions({ deps: true, devDeps: true, optional: true, peer: true });
    expect(result).to.have.length(4);
  });

  it('dependency target shouldn\'t target dev, optional or peer', () => {
    const [{ dev, optional, peer }] = parseTargetOptions({ deps: true });
    expect(dev).to.be.undefined;
    expect(optional).to.be.undefined;
    expect(peer).to.be.undefined;
  });

  it('creates a target option for dev', () => {
    const [{ dev }] = parseTargetOptions({ devDeps: true });
    expect(dev).to.be.true;
  });

  it('creates a target option for optional', () => {
    const [{ optional }] = parseTargetOptions({ optional: true });
    expect(optional).to.be.true;
  });

  it('creates a target option for peer', () => {
    const [{ peer }] = parseTargetOptions({ peer: true });
    expect(peer).to.be.true;
  });
});
