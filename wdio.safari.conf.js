const { config } = require('./wdio.conf.js');

config.capabilities = [{
  browserName: 'safari'
  // Safari не підтримує headless, тому без опцій
}];

exports.config = config;