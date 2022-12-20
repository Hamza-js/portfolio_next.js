import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
type Props = {};

function Contact({}: Props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ko2plqa",
        "template_teil4px",
        form.current,
        "FZ8IDTfRPoweQx_Rw"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-screen  flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got what you need.
          <span className="underline decoration-[#F7AB0A]/50">Let's Talk</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl ">+923227136870</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl ">hamza23.js@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl ">Lahore, Punjab, Pakistan</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2  ">
            <input
              name="name"
              className="formInfut"
              placeholder="Name"
              type="text"
            />
            <input
              name="email"
              className="formInfut"
              placeholder="Email"
              type="email"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="formInfut"
          />
          <button
            type="submit"
            className=" bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
