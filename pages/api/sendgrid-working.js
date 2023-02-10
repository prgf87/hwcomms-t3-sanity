import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'prgf2011@gmail.com',
      from: 'globalwebsystems.official@gmail.com',
      subject: `${req.body.subject}`,
      html: `${req.body.message}`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  // return res.status(200).json({ error: '' });
}

export default sendEmail;

// async function handler() {
//   // using Twilio SendGrid's v3 Node.js Library
//   // https://github.com/sendgrid/sendgrid-nodejs

//   const sgMail = require('@sendgrid/mail');
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   const msg = {
//     to: 'test@example.com', // Change to your recipient
//     from: 'test@example.com', // Change to your verified sender
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   };
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log('Email sent');
//     })
//     .catch((error: any) => {
//       console.error(error);
//     });
// }
// export default handler;
