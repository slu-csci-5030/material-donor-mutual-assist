# Sending an automatic reminder email to Doner after process
For sending the remainder we can also add the email remainder form for the doner,the fetch function to simulate a successful response when the form is submitted.We render the EmailReminderForm component.fill out the form fields with test values using fireEvent.change.
We simulate a click on the "Send Email" button using fireEvent.click.
We wait for the email to be sent by using waitFor and then assert that the fetch function was called with the correct parameters and that the success message alert was shown.
npm install --save-dev @testing-library/react @testing-library/-dom
