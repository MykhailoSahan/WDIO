import { config as baseConfig } from './wdio.conf.js';

baseConfig.capabilities = [{
  browserName: 'safari'
  // Safari не підтримує headless, тому без опцій
}];

export const config = baseConfig;