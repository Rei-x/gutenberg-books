import {
  ensureBrowserFlags,
  install,
} from "@neuralegion/cypress-har-generator";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      install(on);
      on("before:browser:launch", (browser, launchOptions) => {
        ensureBrowserFlags(browser, launchOptions);
        return launchOptions;
      });
    },
    baseUrl: "http://localhost:3000",
  },
});
