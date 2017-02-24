import yargs from 'yargs';

export default yargs
  .alias('r', 'reporter')
  .describe('r', 'provide a custom reporter (path or node module)')
  .string('r')
  .boolean('deps')
  .alias('d', 'deps')
  .describe('deps', 'Analyze dependencies')
  .default('deps', true,)
  .boolean('devDeps')
  .alias('D', 'devDeps')
  .describe('devDeps', 'Analyze devDependencies')
  .default('devDeps', false)
  .boolean('optional')
  .alias('o', 'optional')
  .describe('optional', 'Analyze optionalDependencies')
  .default('optional', false)
  .boolean('peer')
  .alias('p', 'peer')
  .describe('peer', 'Analyze peerDependencies')
  .default('peer', false)
  .help()
  .argv;
