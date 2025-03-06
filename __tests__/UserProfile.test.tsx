import UserProfile from "@/components/UserProfile"
import { render, screen } from "@testing-library/react"

describe('UserProfile - Rendering Tests' , ()=> {
    it('should have text Email is Verified when isEmail Verified is set to true' , () => {
        //since we're mocking the components in tests, do not forget to pass the PROPS and pass data to it
        render(<UserProfile displayName="Nima Moradirad"
        username="moradinima05" email="moradinima05@gmail.com"
        isEmailVerified={true}/>) ;
        expect(screen.getByText("Email is Verified")).toBeInTheDocument()
    })
    it('should have text Email NOT Verified when isEmail Verified is set to false' , () => {
        //now, we're checking if the user email is not verified is working OK.
        render(<UserProfile displayName="Nima Moradirad"
        username="moradinima05" email="moradinima05@gmail.com"
        isEmailVerified={false}/>) ;
        // 1. first, make sure that email is verified is not in the text 
        expect(screen.queryByText("Email is Verified")).not.toBeInTheDocument()
        // 2. now, if it's not, then the other text (Email is not Verified) should be shown
        //? You can set the isEmailVerified to true or false to test the tests.
        expect(screen.getByText('Email is not Verified')).toBeInTheDocument() 
    })
    //since we're not using anything that needs ASYNC data, we DO NOT need to use findBy.. queries
    //?Now,we're writing a text to test if the displayName actually goes with (...) when it's > 30
    it('should have diplayName ending with three dots if greater than 30 characters' , () => {
        render(<UserProfile displayName="Nima Moradirad keeps yelling his own name!"
            username="moradinima05" email="moradinima05@gmail.com"
            isEmailVerified={false}/>) ;
            const displayNameSpanElement = screen.getByText(/Name : /);
    //since we don't wanna hardcode a name here, we use regular-exp to say whatever the name is at first, it should end with ... (if greater than 30)
            expect(displayNameSpanElement).toHaveTextContent(/.*\.\.\./)
    })
    //?Now,we're writing a text to check that the displayName DOES NOT go with (...) when it's < 30
    it('should NOT have diplayName ending with three dots if less than 30 characters' , () => {
        render(<UserProfile displayName="Nima Moradirad"
            username="moradinima05" email="moradinima05@gmail.com"
            isEmailVerified={false}/>) ;
            const displayNameSpanElement = screen.queryByText(/Name : /);
            expect(displayNameSpanElement).not.toHaveTextContent(/.*\.\.\./)
    })
})