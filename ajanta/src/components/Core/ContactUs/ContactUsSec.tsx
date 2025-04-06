import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm: React.FC = () => {
  return (
    <div className="text-richblack-300 rounded-xl p-7 lg:p-14 flex flex-col items-center w-full max-w-6xl mx-auto">
      <h1 className="text-4xl leading-tight font-bold text-richblack-5">
        We would love to hear from you.
      </h1>
      <p className="text-lg text-richblack-200 mt-2 max-w-xl text-center">
        Feel free to reach out using the form below.
      </p>

      <div className="w-full">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;