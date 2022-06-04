import { setupServer } from "msw/node";
import { setupRequestHandlers } from "./setupRequestHandlers";

export const server = setupServer();
setupRequestHandlers(server);
