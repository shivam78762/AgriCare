import React from "react";
import InnerBanner from "../components/Banner";
import ServiceSection from "../components/BuildBetter";
import WhyCHoose from "../components/WhyCHoose";
import Testimonials from "../components/Testimonials";

const page = () => {
  return (
    <div>
      <InnerBanner title="About Us" />
      <ServiceSection />
      <WhyCHoose />
      <Testimonials />
    </div>
  );
};

export default page;
