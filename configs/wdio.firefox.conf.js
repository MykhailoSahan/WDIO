import { config as baseConfig } from "./wdio.conf.js";

baseConfig.capabilities = [
  {
    browserName: "firefox",
    "moz:firefoxOptions": {
      args: ["-headless"],
    },
  },
];

export const config = baseConfig;
