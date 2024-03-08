# material-donor-mutual-assist
This is the repository for Material Donor Mutual Assist project.
Issue:Sending an student message/photos/thanks/... to Doner whenever we received it
# Appreciation Message and Photo Sharing for Donors
-- We are excited to introduce a new feature that allows us to express our gratitude to our generous donors in a more personal and visual way. With this feature, whenever we receive a donation from a kind-hearted donor, our students will have the opportunity to send a heartfelt message, share photos, and extend their thanks directly to the donor.
# I want to add features like Donor Acceptance: 
Here Our staff will make sure that a donation is appropriately acknowledged and entered into our system as soon as it is received.
# Participation of Students: 
who benefit from the donation, will be invited to participate in expressing their appreciation.
# Exchange of pictures:
upload pictures that demonstrate how the donation has improved their lives in addition to messages. Contributors will be able to see their concrete outcomes through these graphic representations
--by facilitating direct communication and personal expression between receivers and donors we can have deeper coonection
# Sending an automatic reminder email to Doner after process
Sending an automatic reminder as a text message to the donor would be more benefit,as every time opening the open looking regarding the mail is not possible for most if we send an automatic message through the mobile number of the doners it would be easy to them 
# application where users input the email address, message, and reminder date. A server-side application (e.g., built with Node.js and Express.js) that receives the reminder details from the frontend, schedules the reminder, and sends the email when the reminder date is reached.Email Service: Integration with an email service provider (e.g., SendGrid, Nodemailer) to send the actual reminder emails.Email Service: Integration with an email service provider (e.g., SendGrid, Nodemailer) to send the actual reminder emails.POST request to /api/sendReminder with the reminder details.The backend receives this request, schedules a job using node-schedule to send the email at the specified reminder date, and responds to the frontend with a success message.When the scheduled reminder date arrives, the backend sends the reminder email using Nodemailer.
