import React from "react";
import InnerBanner from "../components/Banner";
import Image from "next/image";
import LeftContent from "../components/LeftContent";
import WhyCHoose from "../components/WhyCHoose";
import Contact from "../components/FormComponent";

const page = () => {
  return (
    <>
      <InnerBanner title="Desert Soil Reclamation" />

      <section className="single-page-section pt-16 pb-10 px-5 lg:px-28">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-2/3">
            <section className=" mx-auto">
              <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-[#2d7372]">
                Reclaiming the Unproductive
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-justify">
                Deserts make up more than one-third of the Earth’s surface. With
                climate change and population pressure accelerating land
                degradation, restoring desert soils has become a global
                priority. At Agricare Planet, our mission is to transform barren
                terrain into fertile ecosystems using sustainable, organic, and
                high-impact solutions.
              </p>
              <p className="text-lg leading-relaxed text-justify">
                From water-efficient technologies to soil enrichment, our
                holistic approach to desert reclamation helps promote food
                security, biodiversity, and resilient agriculture in even the
                harshest climates.
              </p>
            </section>

            {/* Process Section */}
            <section className="bg-white py-10 px-0">
              <div className=" mx-auto block md:flex gap-4 lg:gap-12 items-center">
                <div>
                  <h3 className="text-lg lg:text-3xl font-semibold mb-6 text-[#2d7372]">
                    Our Approach to Restoration
                  </h3>
                  <ul className="list-disc text-lg space-y-4 pl-5">
                    <li>Organic compost and biofertilizer application</li>
                    <li>Drip irrigation and moisture retention strategies</li>
                    <li>Green manuring and cover cropping</li>
                    <li>Salt mitigation for arid and semi-arid soils</li>
                    <li>Agroforestry and regenerative planting models</li>
                  </ul>
                </div>
                <Image
                  src="/images/environmental-awareness.webp"
                  alt="Soil Treatment"
                  width={300}
                  height={400}
                  className="rounded-2xl mt-3 lg:mt-0 mx-auto"
                />
              </div>
            </section>

            {/* Environmental & Community Impact */}
            <div className="py-10">
              <section className="mx-auto ">
                <h3 className="text-lg lg:text-3xl font-bold text-[#2d7372] mb-6 ">
                  Beyond Soil: Transforming Communities
                </h3>
                <p className="text-lg leading-relaxed mb-4 text-justify">
                  Our desert reclamation efforts extend beyond land restoration.
                  By creating new opportunities for farming, employment, and
                  green industries, we empower communities to thrive
                  sustainably. Each project is designed in partnership with
                  local stakeholders, ensuring relevance, inclusivity, and
                  long-term success.
                </p>
                <p className="text-lg leading-relaxed">
                  Restored land not only grows crops — it builds futures. From
                  training programs to research collaborations, we foster
                  resilience in people as much as in soil.
                </p>
              </section>

              {/* Transformation Visual */}
              <section className="w-full py-10 px-5 lg:px-28">
                <Image
                  src="/images/before.webp"
                  alt="Before and After Transformation"
                  width={1920}
                  height={800}
                  className="w-full h-auto object-cover rounded-none"
                />
              </section>
            </div>

            {/* Innovation Section */}
            <section className="bg-green-50 py-10 px-6">
              <h3 className="text-lg lg:text-3xl font-bold mb-6 text-[#2d7372] text-center">
                Tech-Driven Green Innovation
              </h3>
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg leading-relaxed mb-4 text-justify">
                    We integrate modern agricultural tech including drone
                    mapping, AI soil analysis, and satellite monitoring to
                    maximize productivity while minimizing waste. Our
                    bio-enhanced fertilizers are specially formulated for desert
                    climates, improving soil structure and long-term fertility.
                  </p>
                  <p className="text-lg leading-relaxed text-justify">
                    Certified by UAE MOCCAE and built on global best practices,
                    our solutions are practical, proven, and scalable.
                  </p>
                </div>
                <Image
                  src="/images/desert.webp"
                  alt="Innovation in Desert Agriculture"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </section>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="sticky top-24">
              <LeftContent />
            </div>
          </div>
        </div>
      </section>
      <WhyCHoose />
      <Contact />
    </>
  );
};

export default page;
