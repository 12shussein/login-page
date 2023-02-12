const sgMail = require('D');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'recipient@example.com', // replace with the user's email address
  from: 'sender@example.com', // replace with your email address
  subject: 'Welcome to my app',
  text: `Hi, you have successfully registered with ID ${userId}.`,
  html: `<p>Hi, you have successfully registered with ID ${userId}.</p>`,
};

sgMail.send(msg)
  .then(() => {
    console.log('Confirmation email sent');
  })
  .catch((error) => {
    console.error(error);
  });