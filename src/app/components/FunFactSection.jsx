"use client";

import Image from "next/image";
import { FaLeaf, FaUserAlt } from "react-icons/fa";

export default function FunFactSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: "url('/images/chooseBanner.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="relative z-10 container mx-auto px-5 lg:px-28">
        <div className="flex flex-wrap gap-5 items-center justify-between">
          <div className="w-full lg:w-1/2 ">
            <div className="text-white">
              <div className="mb-6">
                <div className=" space-y-6">
                  <div className="text-4xl font-bold relative">
                    {/* <span className="absolute text-6xl opacity-10 -top-10 -left-2 font-extrabold">
                      Impact
                    </span> */}
                    Our Work Promise To Uphold The
                    <span className="text-white relative inline-block">
                      Trust!
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

                <p className="mt-4 text-lg  text-justify">
                  Since our inception, Agricare Planet has successfully
                  revitalized acres of desert land, reducing waste, and
                  promoting sustainable agriculture in the UAE. We are proud to
                  contribute to a greener, healthier future for the region.
                </p>
                <p className="mt-4 text-lg  text-justify">
                  Our dedicated team of experts ensures every project meets the
                  highest environmental and agricultural standards. Through
                  innovation and commitment, we continue to transform barren
                  landscapes into thriving ecosystems.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                {[
                  { number: "48+", label: "Project Done" },
                  { number: "3+", label: "Award Achieved" },
                  { number: "3+", label: "Office Branches" },
                  { number: "1K+", label: "Happy Volunteer" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className=" p-4 bg-white rounded-lg text-center"
                  >
                    <div className="text-3xl font-bold text-[#2d7372]">
                      {item.number}
                    </div>
                    <div className="text-sm text-gray-800 mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%] ">
            <Image
              src="/images/after.webp"
              alt="A desert before and after reclamation with visible greenery and soil health improvement"
              width={800}
              height={700}
              className="h-[250px] lg:h-[450px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
