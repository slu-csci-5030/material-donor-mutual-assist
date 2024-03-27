# Sending an automatic reminder email to Doner after process
For sending the remainder we can also add the email remainder form for the doner,the fetch function to simulate a successful response when the form is submitted.We render the EmailReminderForm component.fill out the form fields with test values using fireEvent.change.
We simulate a click on the "Send Email" button using fireEvent.click.
We wait for the email to be sent by using waitFor and then assert that the fetch function was called with the correct parameters and that the success message alert was shown.
npm install --save-dev @testing-library/react @testing-library/-dom
Reminder Script:
function sendReminderEmails() {
  var form = FormApp.openById('YOUR_FORM_ID');
  var responses = form.getResponses();
  
  for (var i = 0; i < responses.length; i++) {
    var response = responses[i];
    var itemResponses = response.getItemResponses();
    var emailAddress = itemResponses[0].getResponse();
    var reminderDate = new Date(itemResponses[1].getResponse());
    var reminderMessage = itemResponses[2].getResponse();

    var today = new Date();
    
    if (reminderDate > today) {
      // Send email reminder
      MailApp.sendEmail({
        to: emailAddress,
        subject: "Reminder: " + reminderMessage,
        body: "This is a reminder for " + reminderMessage + ".",
      });
    }
  }
}
https://docs.google.com/forms/d/10CyDlSfpfKnAQQqtlgD9s5TOxJAuyJee5MADPKz7F6c/edit
