"use client";
import React from "react";
import InnerBanner from "../components/Banner";
import WhyCHoose from "../components/WhyCHoose";
import Image from "next/image";
import { FaBookOpenReader, FaArrowRight, FaPlantWilt } from "react-icons/fa6";

export default function LandscapingPage() {
  return (
    <>
      <InnerBanner title=" Landscaping & AMC Services" />
      <main className="bg-white text-gray-800 px-5 lg:px-20 pt-16 space-y-20">
        {/* Header */}
        <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/images/landscape.webp"
              alt="Green landscaped garden with pathway"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-green-700">
              Introduction
            </h2>
            <p>
              <strong>Agricare Planet</strong> is now the UAE’s largest organic
              fertilizer supplier, thanks to our innovation, scale, and
              sustainability.
            </p>
            <ul className="list-disc pl-6 ">
              <li>Our production capacity and nationwide distribution</li>
              <li>Range of fertilizers tailored to regional soils</li>
              <li>Partnerships with local farms and municipalities</li>
              <li>Certifications and compliance with FCO, UAE MOCCAE</li>
            </ul>
            <p className="italic ">
              We’re more than the biggest — we’re the most trusted in the
              region.
            </p>
          </div>
        </section>

        <section className="bg-white px-5 lg:px-28">
          <div className=" mx-auto grid lg:grid-cols-2 items-center gap-10">
            {/* Left Content */}
            <div className=" space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#2d7372] font-semibold text-lg lg:text-xl uppercase border-b-4 border-[#2d7372] w-fit pb-1 mx-auto lg:mx-0">
                <FaPlantWilt />
                <span>Landscaping & AMC Services</span>
              </div>

              <h2 className="text-xl lg:text-4xl font-extrabold leading-tight">
                We <span className="text-[#2d7372]"> Transforming </span>{" "}
                Spaces, Sustaining Green Life
              </h2>

              <p className="text-gray-500 text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
                At <strong>AgriCare Planet</strong>, we don’t just build gardens
                — we create lasting ecosystems. Whether it's a private villa, a
                corporate office, or a large community development, our
                landscaping and AMC services are tailored to bring beauty,
                functionality, and sustainability to every space.
              </p>
            </div>

            {/* Video Section */}
            <div className=" relative">
              <Image
                src="/images/landscape2.webp"
                alt="Beautifully landscaped villa and garden ecosystem"
                width={600}
                height={400}
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className=" mx-auto px-5 lg:px-28">
            <h3 className="text-xl lg:text-4xl font-bold text-[#2d7372] mb-6 text-center">
              <span className="font-light text-gray-800">What</span> we offer?
            </h3>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left Column - Intro */}
              <div>
                <p className=" mb-4 text-lg text-justify">
                  From concept to creation, our landscape architects and
                  horticulture experts bring your outdoor vision to life.
                </p>
                <p className=" mb-4 text-lg text-justify">We specialize in:</p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-green-800">
                  <li>
                    <a href="#" className="hover:underline">
                      Garden & Lawn Design (Residential & Commercial)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Hardscaping (Pathways, Pergolas, Paving, Rock Features)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Softscaping (Soil Preparation, Turfing, Trees & Flower
                      Beds)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Irrigation Systems (Drip & Sprinkler Installation)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Lighting & Decorative Elements
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Eco-friendly Vertical Gardens & Green Walls
                    </a>
                  </li>
                </ul>
                <p className="mt-4">
                  Our scientific team ensures every design supports long-term
                  soil fertility and plant health.
                </p>
              </div>

              {/* Center Column - Services */}
              <div className="space-y-8">
                <Image
                  src="/images/green-park-view.webp"
                  alt="Gardener providing maintenance in a lush garden"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="">
          {/* Decorative elements */}
          <div className="absolute left-0 right-0 h-16 bg-green-50/40 -z-10"></div>

          {/* Header with decorative accents */}
          <div className="text-center mb-12 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-green-100 text-5xl">
              ✻
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-green-800 relative inline-block">
              <span className="relative z-10">
                Annual Maintenance Contracts{" "}
                <span className="text-[#2d7372]">(AMC)</span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-green-200/60 z-0"></span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We understand that beauty needs upkeep. Our AMC services guarantee
              your outdoor space remains lush, clean, and thriving all year
              round.
              <span className="block mt-1 text-sm text-green-700">
                Our AMC includes:
              </span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Services list with decorative cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="absolute -left-10 -top-8 text-green-100 text-7xl -z-10">
                ❧
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-green-50 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-green-700 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Core Services
                </h3>
                <ul className="space-y-3 pl-1">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Lawn mowing & edge trimming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Seasonal pruning & plant care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Organic pest control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Soil testing & nutrients</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-green-50 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-green-700 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Additional Care
                </h3>
                <ul className="space-y-3 pl-1">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Irrigation maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Waste removal & composting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Monthly photo reports</span>
                  </li>
                  <li className="flex items-start opacity-0">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Spacer</span>
                  </li>
                </ul>
              </div>
              <div className="lg:absolute w-max mx-auto -bottom-4 -right-4 bg-[#2d7372] text-white px-4 py-2 rounded-lg shadow-md text-sm font-medium">
                Year-Round Care
              </div>
            </div>

            {/* Image with decorative frame */}
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-green-100 rounded-xl -z-10"></div>
              <div className="absolute -inset-2 border border-green-50 rounded-xl -z-10"></div>
              <Image
                src="/images/gardener.webp"
                alt="Gardener providing maintenance in a lush garden"
                width={600}
                height={400}
                className="rounded-lg shadow-md transform hover:scale-[1.01] transition-transform"
              />
            </div>
          </div>

          {/* Footer note with decorative border */}
          <div className="mt-14 pt-6 border-t border-green-100 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-4 text-[#2d7372] text-sm">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <p className="text-center text-gray-600 italic max-w-3xl mx-auto">
              Available for{" "}
              <span className="font-medium text-green-700">residential</span>,{" "}
              <span className="font-medium text-green-700">corporate</span>,
              <span className="font-medium text-green-700">hotel</span>, and{" "}
              <span className="font-medium text-green-700">
                community gardens
              </span>{" "}
              — customized solutions for any size and scale.
            </p>
          </div>
        </section>
      </main>
      <WhyCHoose />
    </>
  );
}
