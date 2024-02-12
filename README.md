# material-donor-mutual-assist
SignUp Page Tests

Make sure to have Node.js and npm installed in your machine.

Running Test Cases
npm test

Test Cases
1. Renders Signup header
Description: This test ensures that the Signup component renders the header correctly.
Test Command: render(<BrowserRouter><Signup /></BrowserRouter>)
Assertion: expect(headerElement).toBeInTheDocument();

2. Clicks Signup button
Description: This test simulates a click on the Signup button and checks for any errors or unexpected behavior.
Test Command: render(<BrowserRouter><Signup /></BrowserRouter>)
Action: fireEvent.click(signupButton)
