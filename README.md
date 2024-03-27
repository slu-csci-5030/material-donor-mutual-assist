### Description:
The DonorForm component is a reusable form component designed to collect donor details. It includes fields for First Name, Last Name, Email, Address, Zip Code, and Contact Number. The component includes validation to ensure the required fields are filled out and that the email and zip code formats are valid.

## Usage:

Import the DonorForm component into your project.
Place the DonorForm component wherever you need to collect donor details.
Upon submission, the form data can be handled through the onSubmit callback.
## DonorForm Component

The `DonorForm` component is a form used for collecting donor details in our application. It allows users to input their first name, last name, email, address, zip code, and contact number. The form includes client-side validation to ensure that all required fields are filled out correctly.

### Features:
- Input validation for first name, last name, email, and zip code fields.
- Display of error messages for invalid input.
- Form submission handling with validation checks.

### Usage:
To use the `DonorForm` component in your project, simply import it and render it within your desired component or page.

```jsx
import DonorForm from './DonorForm';

function App() {
  return (
    <div>
      <DonorForm />
    </div>
  );
}

export default App;
