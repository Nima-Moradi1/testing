//writing our first test for homepage here

import Home from '@/app/page'
import {render , screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'


    // DESCRBIE is a test Suite which we define but it's not known as a test, but as a Suite.
describe('Home Page' , () => {
    describe(' Rendering Tests' , () => {
        //1st argument : a unique name to say what the test is supposed to do
        it('should have Home Page text' , ()=> {
            render(<Home />) ;
        //the screen method literally lets us search for anything we want in the component we rendered
            expect(screen.getByText('Home Page')).toBeInTheDocument()
        })
        it('should have button with text : click me' , () => {
        //?Role : each html element has a rule which you can inspect when you :
        //?1. open the console   2. click the html element you want   3.go to accessibility
        //?you can see that it has a name , role , title , focusable , and ... properties
            render(<Home />);
            expect(screen.getByRole('button' , {name : 'Click Me'})).toBeInTheDocument() ;
        })
    
        it('should have an input field with label : Enter Random Text : ' , () => {
            render(<Home />);
        // expect(screen.getByRole('textbox')).toBeInTheDocument()
        //?Better Approach for inputs is to search by labels of inputs : 
            expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument();
        })
        it('should have an input field with label : Enter Specific text : ' , () => {
            render(<Home />);
        // expect(screen.getByRole('textbox')).toBeInTheDocument()
        //?Better Approach for inputs is to search by labels of inputs : 
            expect(screen.getByLabelText(/Enter Specific Text/)).toBeInTheDocument();
        })
        it('should have an input field with placeHolder : something : ' , () => {
            render(<Home />);
        //? we can also test the inputs by their placeholders
            expect(screen.getByPlaceholderText(/something/)).toBeInTheDocument();
        })
        it('should have an input field with display Value : hey there : ' , () => {
            render(<Home />);
        //? or even test them by their displayed value
            expect(screen.getByDisplayValue(/hey there/)).toBeInTheDocument();
        })
    
        //Now, we want to test if a thing should NOT be in the document
        it('should NOT find an element with text : This is the show text' , () => {
            render(<Home />) ;
        //we use queryBy.. instead of getBy.. because it returns null instead of throwing error when the text is actually NOT in the document
            expect(screen.queryByText(/this is the show text!/)).not.toBeInTheDocument()
        })
    }) 
    describe(' Behaviorial Tests' , () => {
        it('should click on show text button and find new text' , async () => {
            render(<Home />) ;
    //first , we should make sure the text is not in the document at first .
    expect(screen.queryByText(/this is the show text!/)).not.toBeInTheDocument()
           const showTextBtn = screen.getByRole('button' , {name : 'Show Text'}) ;
    //userEvents and states in React are async since they're waiting for an action to fire, so we make them await.
           await userEvent.click(showTextBtn);
    //so now , we should make sure that after clicking, we have the text shown in the document

    //we use findBy when we want to search for sth that takes time to show or render , since as a 3rd argument >> //!it takes a timeout object
    expect(await screen.findByText(/this is the show text!/)).toBeInTheDocument();
        })
    })
})