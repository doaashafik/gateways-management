import { setupClient } from 'msw/browser'
import { handlers } from "./handlers";

export const server = setupClient(...handlers);