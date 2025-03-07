//? In this file, we're setting up the API mocking with msw package

import {setupServer} from 'msw/node'
import { handlers } from './handlers';

//?We want the result of the handlers function, that's why we're using the ... operator
export const server = setupServer(...handlers);