export const config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  maxInstances: 2,
  specFileRetries: 2,
  logLevel: 'error',
  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};