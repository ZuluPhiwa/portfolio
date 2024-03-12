import React, { useRef } from "react";

import { motion, useIsPresent } from "framer-motion";

const Contact = () => {
  const isPresent = useIsPresent();
  const notify = () => toast("Email Sent Successfully!");
  const form = useRef();

  return (
    <div className="bg-slate-950 text-white " id="contact">
      <div className="h-full p-4 ">
        <h1 className=" font-extrabold text-center  text-5xl py-3 px-4 ">
          Contact
        </h1>

        <div className="  md:grid md:grid-cols-2 h-full py-5 px-12 ">
          <div className=" text-center py-6">
            <h1 className=" font-bold text-2xl uppercase pt-16">Talk to me</h1>
            <p className=" p-2">
              Feel free to leave a message and we will get back to you shortly.
            </p>

            <h1 className="font-bold p-2">Address</h1>
            <p>Mbabane Hilltop, Eswatini</p>

            <h1 className="font-bold p-2">Phone</h1>
            <a href="tel:+26878243714">+268 78243714</a>

            <h1 className="font-bold p-2">Email</h1>
            <a href="mailto:phiwazulu43@gmail.com">phiwazulu43@gmail.com</a>
            <h1 className="font-bold p-2">Linkedin</h1>
            <a
              href="http://www.linkedin.com/in/phiwa-zulu-2aa666165/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/phiwa-zulu-2aa666165/
            </a>
          </div>

          <div className="flex py-5 ">
            <form className="px-4 h-[480px] w-[100%] flex flex-col shadow-lg shadow-black rounded-md">
              <label className="p-2 font-semibold">Name</label>
              <input
                type="text"
                name="from_name"
                className="p-1 border rounded-md"
              />
              <label className="p-2 font-semibold">Email</label>
              <input
                type="email"
                name="from_email"
                className="p-1 border rounded-md"
              />
              <label className="p-2 font-semibold">Message</label>
              <textarea name="message" className=" border rounded-md pb-16" />
              <button
                type="submit"
                value="send"
                className=" bg-cyan-500 p-4 text-center font-bold mt-6 rounded-md text-white uppercase"
              >
                {" "}
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
