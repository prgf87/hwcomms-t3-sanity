import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const data = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.gRecaptchaToken}`,
        }
      );
      const reCaptchaRes = await data.json();

      console.log(
        'Response from Google reCaptcha verification API',
        reCaptchaRes
      );
      if (reCaptchaRes.score >= 0.5) {
        res.status(200).json({
          status: 'success',
          message: 'Enquiry submitted successfully',
        });
      } else if (reCaptchaRes.score < 0.5) {
        res.status(200).json({
          status: 'failure',
          message: 'Google ReCaptcha Failure',
        });
      }
    } catch (err) {
      res.status(405).json({
        status: 'failure',
        message: 'Error submitting the enquiry form',
      });
    }
  } else {
    res.status(405);
    res.end();
  }
}

export default handler;
