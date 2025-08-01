"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export default function ServiceSection() {
  return (
    <>
      <section className="bg-white py-12 px-6 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto block lg:flex gap-20">
          <div className="text-2xl lg:text-4xl font-bold relative">
            Learn More About Our {""}
            <span className=" relative inline-block">
              {""} Solutions
              <svg
                className="absolute left-0 -bottom-1 w-full h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
              >
                <path
                  d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"
                  fill="currentColor"
                  className="text-[#2d7372]"
                ></path>
              </svg>
            </span>
          </div>
          <Link
            href="/about-us"
            className="inline-block bg-[#2d7372]  hover:bg-[#142318] text-white mt-4 lg:mt-0 text-sm lg:text-lg font-medium py-3 px-6 rounded-full transition duration-300"
          >
            Explore Now
          </Link>
        </div>
      </section>

      <section className=" text-gray-800 ">
        <section className="bg-[#F8F8F8] about-area py-16">
          <div className="container mx-auto px-5 lg:px-28">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              {/* Left Image Section */}
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <div className="relative">
                  <Image
                    src="/images/about-desert.webp"
                    alt="About"
                    width={800}
                    height={400}
                    className="rounded-lg w-full"
                  />
                </div>
              </div>

              {/* Right Content Section */}
              <div className="w-full lg:w-1/2 lg:pl-12">
                <div className="mb-6">
                  <h4 className="flex items-center text-lg font-medium mb-2">
                    <Image
                      src="/images/section-shape.webp"
                      alt="Section Shape"
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    Get to know echofy
                  </h4>
                  <div className="text-2xl font-bold relative">
                    {/* <span className="absolute text-3xl lg:text-6xl opacity-10 -top-10 -left-2 font-extrabold">
                      About Us
                    </span> */}
                    Let's Join To Build The Better World{" "}
                    <span className="text-[#2d7372] relative inline-block">
                      Together
                      <svg
                        className="absolute left-0 -bottom-1 w-full h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"
                          fill="currentColor"
                          className="text-[#2d7372]"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-2">
                  <Image
                    src="/images/shape.webp"
                    alt="Shape"
                    width={24}
                    height={24}
                  />
                  <a
                    href="#"
                    className="text-[#2d7372] border-b font-semibold border-[#2d7372] text-lg lg:text-xl "
                  >
                    We’ve 10+ years of Experience Ecology
                  </a>
                </div>

                <p className="text-gray-800 text-justify mb-6">
                  Agricare Planet is a UAE-based pioneer in sustainable soil and
                  waste management solutions. Our mission is to transform barren
                  desert landscapes into fertile ground for agriculture through
                  innovative organic fertilizers and eco-friendly waste
                  management practices. Dedicated to ecological balance, we work
                  to promote sustainable agriculture and reduce waste impact in
                  the UAE.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-[#2d7372] mr-2 mt-1" />
                    Empowering a Greener Future with Every Innovation
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-[#2d7372] mr-2 mt-1" />
                    Transforming Challenges into Sustainable Opportunities
                  </li>
                </ul>

                {/* Author & Button */}
                {/* <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="relative">
                    <Link
                      href="/about-us"
                      className="inline-flex items-center bg-[#2d7372] text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition"
                    >
                      More About
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
