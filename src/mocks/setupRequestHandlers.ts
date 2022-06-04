import { setRequestHandlersByWebarchive } from "@tapico/msw-webarchive";
import { SetupWorkerApi } from "msw";
import * as traffic from "./hars/pantadeusz.har";

/**
 * MSW shows warning when url ends with "?", but it isn't such a problem, when har files are used, everything still works
 */
const disableMSWWarning = () => {};

export const setupRequestHandlers = (
  server: Omit<SetupWorkerApi, "start" | "stop">
) => {
  disableMSWWarning();
  setRequestHandlersByWebarchive(server, traffic, {
    quiet: true,
    strictQueryString: true,
  });
};
