import React from "react";
import InnerBanner from "../components/Banner";
import Contact from "../components/FormComponent";

const page = () => {
  return (
    <>
      <InnerBanner title="Contact Us" />
      <Contact />
      <div className="container mx-auto">
        <div className="w-full h-[450px] relative overflow-hidden  px-4 lg:px-28 pb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.189920663846!2d55.783717875227495!3d25.664998277412877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60bee567a253b%3A0x80fd444807765d7!2sRAKEZ%20Compass%20Coworking%20Centre!5e0!3m2!1sen!2sin!4v1752744678416!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default page;
