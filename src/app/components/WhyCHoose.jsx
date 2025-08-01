"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function WhyCHoose() {
  return (
    <section className="about-section py-16 px-5 lg:px-28">
      <div className="container mx-auto">
        <div className="flex flex-wrap  gap-4 lg:gap-10 items-center">
          {/* Left Image Column */}
          <div className="w-full lg:w-[48%] ">
            <div className="section-about-left about-image-wrap flex flex-wrap">
              <div className="home-about-image left-image hidden lg:block ">
                <img
                  src="/images/mandesert.webp"
                  alt="About Image Left"
                  width={300}
                  height={300}
                  className="w-60  h-60  object-cover "
                />
              </div>
              <div className="home-about-image right-image ml-0 lg:ml-[-30px] w-full md:w-1/2  lg:w-[62%]">
                <Image
                  src="/images/farmers-planting-crops-stockcake.webp"
                  alt="About Image Right"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="home-about-image bottom-image mt-0 lg:mt-[-100px] w-full md:w-1/2 lg:w-[80%]">
                <Image
                  src="/images/farmers-planting-crops.webp"
                  alt="About Image Bottom"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[48%]">
            <div className="section-about-content">
              <div className="section-head ">
                <div className="text-2xl lg:ext-4xl font-bold relative  mb-6">
                  {/* <span className="absolute text-4xl opacity-10 -top-2 font-extrabold pointer-events-none select-none">
                    Why Choose Us?
                  </span> */}

                  {/* Foreground heading with SVG */}
                  <span className="text-[#2d7372] relative inline-block">
                    Why Choose AgriCare?
                    <svg
                      className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-full h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 150"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"
                        fill="currentColor"
                        className="[#2d7372]"
                      />
                    </svg>
                  </span>
                </div>
                <p className="mt-4 text-lg text-justify text-gray-600">
                  At Agricare Planet, we believe in turning challenges into
                  opportunities.
                </p>
              </div>

              <div className="flex flex-wrap items-start mt-8">
                <ul className="w-full text-lg text-gray-700 space-y-4">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#2d7372] mt-1" />
                    <span>
                      <b>Scientific Expertise:</b> Our team includes soil
                      scientists, agronomists, and irrigation engineers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#2d7372] mt-1" />
                    <span>
                      <b>Pest-Free Guarantee:</b> We use organic solutions that
                      are safe for children and pets.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#2d7372] mt-1" />
                    <span>
                      <b>Water Smart Systems:</b> Designed for the UAE’s climate
                      with minimal water wastage.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#2d7372] mt-1" />
                    <span>
                      <b>Trusted Across UAE & India:</b> Over 500+ satisfied
                      clients, from homes to royal estates.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#2d7372] mt-1" />
                    <span>
                      <b>Clear Contracts:</b> Transparent terms — 50% advance,
                      50% after 5 months of service completion.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
