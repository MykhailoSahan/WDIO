export const config = {
  runner: 'local',
  specs: ['../test/specs/**/*.js'],
  maxInstances: 2,
  specFileRetries: 0,
  logLevel: 'error',
  framework: 'mocha',
  reporters: [
  'spec',
  ['html-nice', {
    outputDir: './reports/html-reports',
    filename: 'report.html',
    reportTitle: 'WDIO HTML Report'
  }]
],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};