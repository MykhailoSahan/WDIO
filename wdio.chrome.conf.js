const { config } = require('./wdio.conf.js');

config.capabilities = [{
  browserName: 'chrome',
  'goog:chromeOptions': {
    args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
  }
}];

exports.config = config;