# Sending an automatic reminder email to Doner after process
For sending the remainder we can also add the email remainder form for the doner,the fetch function to simulate a successful response when the form is submitted.We render the EmailReminderForm component.fill out the form fields with test values using fireEvent.change.
We simulate a click on the "Send Email" button using fireEvent.click.
We wait for the email to be sent by using waitFor and then assert that the fetch function was called with the correct parameters and that the success message alert was shown.
npm install --save-dev @testing-library/react @testing-library/-dom

Also we can create forms by collecting the emails and adding the donor into our db, all the data collected will be stored so that further email remainders will be sent by the email remainder process
https://docs.google.com/forms/d/10CyDlSfpfKnAQQqtlgD9s5TOxJAuyJee5MADPKz7F6c/edit
