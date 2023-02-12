'use client';

import ContactMe from '@/components/modules/ContactMe';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Contact() {
  return (
    <main>
      <div className="overflow-x-hidden">
        <div id="contact" className="relative top-[-80px]" />
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string}
          scriptProps={{
            async: false,
            defer: false,
            appendTo: 'head',
            nonce: undefined,
          }}
        >
          <ContactMe />
        </GoogleReCaptchaProvider>
      </div>
    </main>
  );
}

export default Contact;
