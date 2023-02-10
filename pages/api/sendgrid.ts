// import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '@/services/emailService';
import { GetEmailBody, GetEmailSubject } from '@/services/emailTemplateService';

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only post request allowed' });
  }
  try {
    const { name, email, phone, org, date, address, type, hear, message } =
      req.body;

    const emailSubject = await GetEmailSubject('contact/contact_subject.txt');

    const data = {
      name: name,
      email: email,
      phone: phone,
      org: org,
      date: date,
      address: address,
      type: type,
      hear: hear,
      message: message,
    };

    const emailBody = await GetEmailBody('contact/contact_body.txt', data);

    const emailParam = {
      to: process.env.EMAIL_RECIPIENT as string,
      from: process.env.ADMIN_EMAIL as string,
      date: date as Date,
      subject: emailSubject,
      text: emailBody,
    };

    sendEmail(emailParam);

    return res.status(200).json({ message: 'Contact Email Sent Successfully' });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Internal server error';
    res.status(500).json({ message: errorMessage });
    console.log(err);
  }

  return res.status(200).json({ error: '' });
}

export default handler;
