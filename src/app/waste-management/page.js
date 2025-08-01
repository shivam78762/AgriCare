"use client";

import React from "react";
import InnerBanner from "../components/Banner";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const page = () => {
  const services = [
    {
      title: "Food & Organic Waste Recycling",
      image: "/images/Organic-waste-recycling.webp",
      alt: "Organic Waste Recycling",
      points: [
        "Segregation of kitchen & canteen waste",
        "Conversion to compost, bio-fertilizer or biogas",
        "Odor-free microbial digestion technology",
      ],
    },
    {
      title: "Effluent Treatment Plants (ETP)",
      image: "/images/etp.webp",
      alt: "Effluent Treatment Plant",
      points: [
        "Wastewater treatment for food industries",
        "COD/BOD reduction for safe reuse",
        "Sludge recovery & organic reuse",
      ],
    },
    {
      title: "Sewage Treatment Plants (STP)",
      image: "/images/severage.webp",
      alt: "Sewage Treatment Plant",
      points: [
        "Biological treatment of wastewater",
        "Water reuse for irrigation",
        "Nutrient recovery systems",
      ],
    },
    {
      title: "Anaerobic Treatment Plants (ATP)",
      image: "/images/Anaerobic.avif",
      alt: "Anaerobic Treatment",
      points: [
        "High-load waste treatment",
        "Biogas generation & reuse",
        "Digestate recovery",
      ],
    },
    {
      title: "Sludge Management",
      image: "/images/sluge.avif",
      alt: "Sludge Processing",
      points: [
        "Odor-free treatment & disposal",
        "Bio-fertilizer conversion",
        "Regulatory compliance",
      ],
    },
    {
      title: "No Landfilling Policy",
      image: "/images/waste.webp",
      alt: "Zero Landfilling",
      points: [
        "On-site composting & processing",
        "Eco-friendly conversion to bio-resources",
        "MoU-based bulk waste collection",
      ],
    },
  ];

  const industries = [
    {
      title: "Food & Beverage Manufacturing ",
      logo: "/images/logo1.webp",
    },
    {
      title: "Hotels & Resorts",
      logo: "/images/logo2.webp",
    },
    {
      title: "Agricultural Packhouses",
      logo: "/images/logo3.webp",
    },
    {
      title: "Central Kitchens",
      logo: "/images/logo4.webp",
    },
    {
      title: "Residential Communities",
      logo: "/images/logo5.webp",
    },
    {
      title: "Labor Camps",
      logo: "/images/logo6.webp",
    },
  ];

  return (
    <>
      <InnerBanner title=" Bio-Degradable Waste Management Services" />
      <section className="px-4 py-16 sm:px-8 lg:px-28 bg-gray-50 text-gray-800">
        {/* Intro Text */}
        <div className="px-0 lg:px-40 mx-auto   mb-12">
          <h2 className="text-xl sm:text-3xl font-semibold text-left lg:text-center mb-4">
            Zero-Waste. No Landfilling. 100% Environmental Responsibility.
          </h2>
          <p className="text-justify text-lg">
            AgriCare Planet FZ LLC offers specialized bio-degradable waste
            management solutions tailored for urban, industrial, hospitality,
            and agro-based sectors. We help clients—including MNC food
            factories, hotels, labor accommodations, and farms—to manage their
            organic waste efficiently while complying with UAE & India’s
            environmental regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md ">
              <Image
                src={service.image}
                alt={service.alt}
                width={500}
                height={300}
                className="rounded-lg w-full h-48 object-cover"
              />
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <ul className="list-disc ml-6  space-y-1">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Industries We Serve
          </h3>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index}>
                <div className=" flex flex-col items-center justify-center">
                  <Image
                    src={industry.logo}
                    alt={industry.title}
                    width={60}
                    height={60}
                    className="mb-3 h-32 w-auto"
                  />
                  {/* <p className="text-sm font-medium">{industry.title}</p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className=" text-lg text-center px-0 lg:px-40 mt-5">
          Our integrated waste management solutions not only reduce carbon
          footprint but also convert waste into value — restoring the balance
          between growth and sustainability.
        </p>
      </section>
    </>
  );
};

export default page;
