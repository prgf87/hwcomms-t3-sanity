import { NextApiRequest, NextApiResponse } from 'next';
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sgMail.send({
      to: process.env.EMAIL_RECIPIENT,
      from: process.env.ADMIN_EMAIL,
      subject: `[New Lead from HWComms]: ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>Hailey Comms Enquiry</title>
        <meta name="description" content="Hailey Comms Enquiry">
        <meta name="author" content="GlobalWebSystems">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new email from ${req.body.name}</h3> <p>Their email address is: ${req.body.email}</p>
              <div style="font-size: 16px;line-height: 1.5rem;">
              <p>Organisation: ${req.body.org}</p>              
              <p>Business Address: ${req.body.address}</p>
              <p>Project Start Date: ${req.body.date}</p>
              <p>Project Type: ${req.body.projectType}</p>
              <p>How they heard about you: ${req.body.hear}</p>
              <br>
              <br>
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="https://static.wixstatic.com/media/eac08b_54e851f99e154175bc28db336dd9f335~mv2.png/v1/fill/w_210,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/HWCommslogo.png" class="logo-image" style="height: 55px;width: 120px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">With my best Regards,<br>Pedro Ferreira<br>Software Developer<br>+44 (0) 7472097891<br>Global Web Systems - UK</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">                
                <a href="https://github.com/prgf87/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://linkedin.com/in/prgf87/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>                
              </div>
              </div>
      </body>
      </html>`,

      text: `Name: ${req.body.name}
      Email: ${req.body.email}
      Phone Number: ${req.body.phone}
      Address: ${req.body.address}
      Organisation: ${req.body.org}
      Project start date: ${req.body.date}
      Project Type: ${req.body.projectType}
      Hear through: ${req.body.hear}
      Message: ${req.body.message}
      `,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
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

// html: `Name: ${req.body.name}
// Email: ${req.body.email}
// Phone Number: ${req.body.phone}
// Address: ${req.body.address}
// Organisation: ${req.body.org}
// Project start date: ${req.body.date}
// Project Type: ${req.body.projectType}
// Hear through: ${req.body.hear}
// Message: ${req.body.message}
// `,
