export const config = {
  runner: 'local',
  specs: [
    '../features/**/*.feature'
  ],
  maxInstances: 1,
  logLevel: 'error',
  framework: 'cucumber',
  capabilities: [
    // {
    //   maxInstances: 1,
    //   browserName: 'chrome'
    // },
    {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['-headless'],
    },
  },
    // {
    //   maxInstances: 1,
    //   browserName: 'safari'
    // }
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