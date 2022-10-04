import React from "react";
import { Element } from "react-scroll";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <Element name="contact" className="section from-black to-gray-800">
      <div className="sectionLayout">
        <SectionTitle
          title="Contact"
          subtitle="Submit the form below to get in touch with me"
        />
        <div className="flex justify-center items-center">
          <form
            method="POST"
            action="https://getform.io/f/27dac66a-7531-4cfe-882b-39d1a88a5cf7"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none "
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={10}
              className="p-2 bg-transparent  border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Lets Talk
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
