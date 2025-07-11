import { config as baseConfig } from './wdio.conf.js';

baseConfig.capabilities = [{
  browserName: 'chrome',
  'goog:chromeOptions': {
    args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
  }
}];

export const config = baseConfig;