import { setRequestHandlersByWebarchive } from "@tapico/msw-webarchive";
import * as traffic from "./hars/traffic.har";
import { setupServer } from "msw/node";

export const server = setupServer();

setRequestHandlersByWebarchive(server, traffic, { quiet: true });
