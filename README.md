# Sending an automatic reminder email to Doner after process
For sending the remainder we can also add the email remainder form for the doner,the fetch function to simulate a successful response when the form is submitted.We render the EmailReminderForm component.fill out the form fields with test values using fireEvent.change.
We simulate a click on the "Send Email" button using fireEvent.click.
We wait for the email to be sent by using waitFor and then assert that the fetch function was called with the correct parameters and that the success message alert was shown.
npm install --save-dev @testing-library/react @testing-library/-dom

Also we can create forms by collecting the emails and adding the donor into our db, all the data collected will be stored so that further email remainders will be sent by the email remainder process
https://docs.google.com/forms/d/10CyDlSfpfKnAQQqtlgD9s5TOxJAuyJee5MADPKz7F6c/edit
# The goal of this project is to provide an easy-to-use and intuitive form for gathering donor information. The purpose of the DonorForm component is to collect basic data from donors, including their contact number, zip code, address, email address, and first and last names.
# Features:Form layout is neat and structured to make data entry simple.Validation in real-time to guarantee the provision of reliable information.Appropriate padding, border, and shadow effects complement the stylish style.Personalised button featuring a dependable blue colour palette.
# Qualities:Validates essential fields and ensures that the email and zip code forms are proper through input validation. Styling: Makes use of contemporary styling methods to boost the form's visual appeal and user experience. For maximum usability, responsive design makes sure the form is flexible and adjusts to various screen sizes. Error Handling: To assist users in making corrections to their entries, displays error messages for invalid input fields.


