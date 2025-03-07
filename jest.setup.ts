import '@testing-library/jest-dom' ;
import 'whatwg-fetch'
import { server } from './mocks/server';

//Before every unit test gets fired, this method will run first
beforeAll(() => {
    //? Start the server before running tests
    server.listen();
})

afterEach(()=> {
    //? We reset the handlers after each test because we don't want the previous handler data to be carried into next ones.
    server.resetHandlers()
})

//After all the tests are done, close the server (looks like a cleanup function)
afterAll(() => {
    server.close()
})