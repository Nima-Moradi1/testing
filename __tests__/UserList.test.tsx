import { UserList } from "@/components/UserList"
import { render, screen } from "@testing-library/react"

describe('UserList - Rendering', () => {
    //since our api is mockup and not real, we passed a mock data (in handlers.ts) to test it
    it('should have the text Nimooli' , async () => {
        render(<UserList />) ;
    //! If you run this till here, you'll get an error since it's a fetch request and we can't handle it like this
    //! That's why we added whatwg-fetch to handle fetch tests (imported in jest setup)
    expect(
    //Reminder: FindBy.. queries are used when something needs to be awaited to show sth on page
        await screen.findByText(/dambooli/)
    ).toBeInTheDocument()
    })
})