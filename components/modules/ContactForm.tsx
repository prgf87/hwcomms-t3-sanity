'use client';

import { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  phone: string;
  org: string;
  startdate: string;
  address: string;
  type: string;
  hear: string;
  message: string;
};

type Props = {};

function ContactForm({}: Props) {
  const recaptchaRef = useRef(null);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  //   const recaptchaRef = useRef();

  const { register } = useForm<Inputs>();

  // const handleSubmit = (e: any) => {
  //   // e.preventDefault();
  //   // recaptchaRef.current?.execute();
  // };

  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  // const onReCAPTCHAChange = async (captchaCode: any) => {
  //   if (!captchaCode) {
  //     return;
  //   }
  //   try {
  //     const response = await fetch('/api/auth', {
  //       method: 'POST',
  //       body: JSON.stringify({ captcha: captchaCode }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (response.ok) {
  //       // If the response is ok than show the success alert
  //       console.log('****User Validated Correctly*****');
  //       console.log('Response: ', response);
  //       const onSubmit: SubmitHandler<Inputs> = (formData) =>
  //         console.log(formData);
  //       return onSubmit;
  //     } else {
  //       // Else throw an error with the message returned
  //       // from the API
  //       const error = await response.json();
  //       throw new Error(error.message);
  //     }
  //   } catch (error) {
  //     alert(error || 'Something went wrong');
  //   } finally {
  //     // Reset the reCAPTCHA when the request has failed or succeeeded
  //     // so that it can be executed again if user submits another email.
  //     // recaptchaRef.current?.reset();
  //   }
  // };

  //   let recaptchaInstance: any;
  //   const executeCaptcha = (
  //     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  //   ) => {
  //     e.preventDefault();
  //     recaptchaInstance.execute();
  //   };

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
          // onSubmit={handleS}
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200"
            >
              Your name *
            </label>
            <input
              {...register('name')}
              type="name"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Please type your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200"
            >
              Your email *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@youremail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200"
            >
              Your phone number
            </label>
            <input
              {...register('phone')}
              type="phone"
              id="phone"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Phone number here"
            />
          </div>
          <div>
            <label
              htmlFor="org"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200"
            >
              Organization
            </label>
            <input
              {...register('org')}
              type="text"
              id="org"
              className="block p-3 w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="What is the name of your business?"
            />
          </div>

          <div>
            <label
              htmlFor="startdate"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200"
            >
              Start date
            </label>
            <input
              {...register('startdate')}
              type="date"
              id="startdate"
              className="block p-3 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200"
            >
              Your address
            </label>
            <input
              {...register('address')}
              type="text"
              id="address"
              className="block p-3 w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="i.e.: 742 Evergreen Terrace, Springfield, 2600"
            />
          </div>
          <div>
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200"
            >
              What type of project are you looking for?
            </label>
            <select
              {...register('type')}
              name="type"
              id="type"
              className="block p-3 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            >
              <option value="" disabled selected hidden>
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
          </div>

          <div>
            <label
              htmlFor="hear"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200"
            >
              How did you hear about me?
            </label>
            <select
              {...register('hear')}
              name="hear"
              id="hear"
              className="block p-3 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            >
              <option value="" disabled selected hidden>
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
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-400"
            >
              Your message *
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-600 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type your comments here and click Send Message when you are done..."
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </div>
          {/* <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onReCAPTCHAChange}
            badge="inline"
            className="flex justify-center items-center my-5"
          /> */}

          {/* <ReCAPTCHA
            ref={recaptchaRef}
            data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
            data-callback="onSubmit"
            size="invisible"
            badge="inline"
            onChange={onReCAPTCHAChange}
            className="g-recaptcha flex justify-center items-center my-5"

            // ref={(e: any) => (recaptchaInstance = e)}
            // onChange={handleSubmit(onSubmit)}
          /> */}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
