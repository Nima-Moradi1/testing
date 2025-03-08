import LoginForm from '@/components/LoginForm'
import {render , screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { server } from '../mocks/server'

describe('LoginForm - Functionality' , ()=> {
    //! DO NOT FORGET that userEvents are always async methods that needs to be awaited.
    it('should enter username and password and click on login button' , async () => {
        render(<LoginForm />) ;
    //1. username and password are initially empty so button should be disabled :
        const loginButton = screen.getByRole('button' , {name : 'Login'})
        expect(loginButton).toBeDisabled()
    //we use the "type" method to check if user types into an input >> 2. Inputs are not empty now so button should not be disabled
       await userEvent.type(screen.getByLabelText(/Username/), 'Nima');
       await userEvent.type(screen.getByLabelText(/Password/), '1234');
    //3. Now, the button should not be disabled since we have inputs :
       expect(loginButton).toBeEnabled();
    //4. Now, Click on the button:
    await userEvent.click(loginButton) ;
    await waitFor(() => {
        expect(screen.getByText(/Success/)).toBeInTheDocument()
    })
    })

    //In this test, we're making sure the error correctly works
    it('should display error message when login goes wrong :' , async () => {
        render(<LoginForm />) ;
        server.use(
            http.post('/api/auth', async () => {
                return HttpResponse.error()
                
               })
        )
    //1. username and password are initially empty so button should be disabled :
        const loginButton = screen.getByRole('button' , {name : 'Login'})
        expect(loginButton).toBeDisabled()
    //we use the "type" method to check if user types into an input >> 2. Inputs are not empty now so button should not be disabled
       await userEvent.type(screen.getByLabelText(/Username/), 'Niml');
       await userEvent.type(screen.getByLabelText(/Password/), '12');
    //3. Now, the button should not be disabled since we have inputs :
       expect(loginButton).toBeEnabled();
    //4. Now, Click on the button:
    await userEvent.click(loginButton) ;
    await waitFor(() => {
        expect(screen.getByText(/Error/)).toBeInTheDocument()
    })
    })
})