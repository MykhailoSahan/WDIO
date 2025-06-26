const { config } = require('./wdio.conf.js');

config.capabilities = [{
  browserName: 'firefox',
  'moz:firefoxOptions': {
    args: ['-headless']
  }
}];

exports.config = config;