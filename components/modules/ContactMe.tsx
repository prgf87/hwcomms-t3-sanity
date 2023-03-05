import { useState } from 'react';
import { useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function ContactMe() {
  // States for contact form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [projectType, setProjectType] = useState('');
  const [hear, setHear] = useState('');
  const [subject, setSubject] = useState('');
  const [defaultValue] = useState('Select an option');

  //   Form validation state
  // const formValid = document.querySelector('form');
  // const emailValid = document.getElementById('email');
  // const emailValidError = document.querySelector('#email + span.error');
  // const nameValid = document.getElementById('name');
  // const nameValidError = document.querySelector('#name + span.error');
  // const subjectValid = document.getElementById('subject');
  // const subjectValidError = document.querySelector('#subject + span.error');
  // const messageValid = document.getElementById('message');
  // const messageValidError = document.querySelector('#message + span.error');

  // Validation check method

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send message');

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSumit = useCallback(
    (e: any) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      }

      executeRecaptcha('enquiryFormSubmit').then((gReCaptchaToken) => {
        console.log(gReCaptchaToken, 'response Google reCaptcha server');
        async function submitEnquiryForm(gReCaptchaToken: string) {
          fetch('/api/enquiry', {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              gRecaptchaToken: gReCaptchaToken,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res, 'response from backend');
              if (res?.status === 'success') {
                console.log('**** Success Response!! ****', res?.message);
              } else {
                console.log('**** ERROR RESPONSE!! ****', res?.message);
              }

              handleEmail(e);
            });
        }
        submitEnquiryForm(gReCaptchaToken);
        const handleEmail = async (e: any) => {
          e.preventDefault();
          setButtonText('Sending');
          const res = await fetch('/api/sendgrid', {
            body: JSON.stringify({
              name: name,
              email: email,
              subject: subject,
              message: message,
              phone: phone,
              org: org,
              date: date,
              address: address,
              projectType: projectType,
              hear: hear,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          });

          const { error } = await res.json();
          if (error) {
            console.log(error);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
            setButtonText('Send');
            return;
          }
          setShowSuccessMessage(true);
          setShowFailureMessage(false);
          setButtonText('Send');
          console.log('*** Message Sent! ***');
          console.log(res);
        };
        gReCaptchaToken = '';
      });
    },
    [
      address,
      date,
      email,
      executeRecaptcha,
      hear,
      message,
      name,
      org,
      phone,
      projectType,
      subject,
    ]
  );

  return (
    <section id="contact" className="bg-gradient-invert dark:bg-gray-900 pt-20">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-200 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-200 dark:text-gray-400 sm:text-xl px-20">
          Not sure what you need? Would you like to discuss a particular
          project? I&apos;m here to help, please get in touch.
        </p>
        <form
          noValidate={false}
          onSubmit={handleSumit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
        >
          <h1 className="text-2xl font-bold dark:text-gray-50">
            Send a message
          </h1>

          <label
            htmlFor="name"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Full Name<span className="text-red-500 dark:text-gray-50">*</span>
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={name}
            required
            minLength={6}
            onChange={(e) => {
              setName(e?.target?.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            E-mail<span className="text-red-500">*</span>
          </label>

          <input
            id="email"
            type="email"
            name="email"
            required
            minLength={6}
            value={email}
            onChange={(e) => {
              setEmail(e?.target?.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="phone"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e?.target?.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="org"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Organisation
          </label>

          <input
            id="org"
            type="text"
            name="org"
            value={org}
            onChange={(e) => {
              setOrg(e?.target?.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="date"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Project Start Date
          </label>

          <input
            id="date"
            type="date"
            name="date"
            value={date}
            onChange={(e) => {
              setDate(e?.target?.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="address"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Business Address
          </label>

          <input
            id="address"
            type="text"
            name="address"
            value={address}
            onChange={(e) => {
              setAddress(e?.target?.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="projectType"
            className="text-gray-500 font-light mt-4 mb-4 dark:text-gray-50"
          >
            What type of project are you looking for?
          </label>

          <select
            name="projectType"
            id="projectType"
            value={projectType}
            onChange={(e) => {
              setProjectType(e?.target?.value);
            }}
            className="bg-transparent border-b py-4 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light block w-full text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          >
            <option>{defaultValue}</option>
            <option>Bio &amp; Social Interview</option>
            <option>Coaching - 1 on 1</option>
            <option>Coaching - Team / Group</option>
            <option>Communications Campaign / Strategy</option>
            <option>Content Creation</option>
            <option>Design Thinking Workshop</option>
            <option>Empathy Communication Training</option>
            <option>Event Social Coordinator</option>
            <option>Social Media Campaign</option>
            <option>Speaker</option>
            <option>Other</option>
          </select>

          <label
            htmlFor="hear"
            className="text-gray-500 font-light mt-4 mb-4 dark:text-gray-50"
          >
            How did you hear about me?
          </label>
          <select
            name="hear"
            id="hear"
            value={hear}
            onChange={(e) => {
              setHear(e?.target?.value);
            }}
            className="bg-transparent border-b py-4 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light block w-full text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          >
            <option>{defaultValue}</option>

            <option>Personal Website</option>
            <option>Google</option>
            <option>Facebook</option>
            <option>Instagram</option>
            <option>Yelp</option>
            <option>LinkedIn</option>
            <option>Vendor Referral</option>
            <option>Client Referral</option>
            <option>Other</option>
          </select>

          <label
            htmlFor="subject"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Subject<span className="text-red-500">*</span>
          </label>

          <input
            id="subject"
            type="text"
            name="subject"
            required
            minLength={6}
            value={subject}
            onChange={(e) => {
              setSubject(e?.target?.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={30}
            maxLength={250}
            value={message}
            onChange={(e) => {
              setMessage(e?.target?.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="py-3 px-5 text-lg font-bold text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-10"
            >
              {buttonText}
            </button>
          </div>
          {(showSuccessMessage && <p>{showSuccessMessage}</p>) ||
            (showFailureMessage && <p>{showFailureMessage}</p>)}
        </form>
      </div>
    </section>
  );
}
