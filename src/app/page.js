import ServiceSection from "./components/BuildBetter";
import CoreValues from "./components/CoreValues";
import Contact from "./components/FormComponent";
import FunFactSection from "./components/FunFactSection";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import OrginicServices from "./components/OrginicServices";
import Testimonials from "./components/Testimonials";
import WhyCHoose from "./components/WhyCHoose";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <CoreValues />
      <OrginicServices />
      <WhyCHoose />
      <Testimonials />
      <Gallery />
      <FunFactSection />
      <Contact />
    </>
  );
}
