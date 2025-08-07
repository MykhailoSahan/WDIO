export const config = {
  runner: 'local',
  specs: [
    '../features/**/*.feature'
  ],
  maxInstances: 1,
  logLevel: 'error',
  framework: 'cucumber',
  capabilities: [
    {
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['-headless'],
      }
    }
  ],
  cucumberOpts: {
    require: ['./step-definitions/**/*.steps.js'],
    timeout: 60000
  },
  reporters: [
    'spec',
    ['html-nice', {
      outputDir: './reports/html-reports',
      filename: 'report.html',
      reportTitle: 'Cucumber Test Report'
    }]
  ]
};