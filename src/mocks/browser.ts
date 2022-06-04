import { setupWorker } from "msw";
import { setupRequestHandlers } from "./setupRequestHandlers";

export const worker = setupWorker();
setupRequestHandlers(worker);
