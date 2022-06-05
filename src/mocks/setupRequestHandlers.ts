import { setRequestHandlersByWebarchive } from "@tapico/msw-webarchive";
import { SetupWorkerApi } from "msw";
import traffic from "./hars/pantadeusz.json";

export const setupRequestHandlers = (
  server: Omit<SetupWorkerApi, "start" | "stop">
) => {
  setRequestHandlersByWebarchive(server, traffic, {
    quiet: true,
    strictQueryString: true,
  });
};
