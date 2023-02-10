'use client';

import React, { useState } from 'react';

export default function ContactMe() {
  // States for contact form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');
  const [hear, setHear] = useState('');

  //   Form validation state
  // const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send');

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  // const handleValidation = () => {
  //   let tempErrors = {};
  //   let isValid = true;

  //   if (name.length <= 0) {
  //     tempErrors['name'] = true;
  //     isValid = false;
  //   }
  //   if (email.length <= 0) {
  //     tempErrors['email'] = true;
  //     isValid = false;
  //   }
  //   if (subject.length <= 0) {
  //     tempErrors['subject'] = true;
  //     isValid = false;
  //   }
  //   if (message.length <= 0) {
  //     tempErrors['message'] = true;
  //     isValid = false;
  //   }

  //   setErrors({ ...tempErrors });
  //   console.log('errors', errors);
  //   return isValid;
  // };

  //   Handling form submit

  const handleSubmit = async (e: any) => {
    console.log(email, name, phone, org, date, address, type, hear, message);

    e.preventDefault();

    // let isValidForm = handleValidation();

    // if (isValidForm) {
    // setButtonText('Sending');
    // const res = await fetch('/api/sendgrid', {
    //   body: JSON.stringify({
    //     name: name,
    //     email: email,
    //     message: message,
    //     phone: phone,
    //     org: org,
    //     date: date,
    //     address: address,
    //     type: type,
    //     hear: hear,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    // });

    // const { data } = await res.json();
    // if (data.error) {
    //   console.log(data.error);
    //   setShowSuccessMessage(false);
    //   setShowFailureMessage(true);
    //   setButtonText('Send');
    //   return;
    // }
    // setShowSuccessMessage(true);
    // setShowFailureMessage(false);
    // setButtonText('Send');
    // console.log('*** Message Sent! ***');
    // console.log(res);
    // }
    // console.log(
    //   email,
    //   subject,
    //   name,
    //   phone,
    //   org,
    //   date,
    //   address,
    //   type,
    //   hear,
    //   message
    // );
  };

  return (
    <section id="contact" className="bg-gradient-invert dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-200 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-200 dark:text-gray-400 sm:text-xl px-20">
          Got a technical issue? Want to send feedback about a feature? Need to
          talk to me directly about anything else? Get in touch.
        </p>
        <form
          onSubmit={handleSubmit}
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
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
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
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
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
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
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
            type="text"
            name="org"
            value={org}
            onChange={(e) => {
              setOrg(e.target.value);
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
            type="date"
            name="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
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
            type="text"
            name="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="type"
            className="text-gray-500 font-light mt-4 mb-4 dark:text-gray-50"
          >
            What type of project are you looking for?
          </label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            className="bg-transparent border-b py-4 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light block w-full text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          >
            <option
              value=""
              onChange={(e: any) => {
                setType(e.target.value);
              }}
              disabled
              selected
              hidden
            >
              Select an option
            </option>

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
              setHear(e.target.value);
            }}
            className="bg-transparent border-b py-4 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light block w-full text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          >
            <option
              value=""
              onChange={(e: any) => {
                setHear(e.target.value);
              }}
              disabled
              selected
              hidden
            >
              Select an option
            </option>
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
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="py-3 px-5 text-lg font-bold text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-10"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
