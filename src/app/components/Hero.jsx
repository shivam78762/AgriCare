"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imageData = [
  {
    src: "hero1.webp",
    heading: "Quality Soil for Agriculture",
    subheading:
      "Rich soil grows rich harvests. We restore barren land into fertile ground using organic, science-based inputs — creating long-term productivity for farms and landscapes.",
    description:
      "Organic Fertilizers & Sustainable Waste Management for a Greener UAE",
  },
  {
    src: "hero2.webp",
    heading: "Enrich Your Land Naturally",
    subheading:
      "Revive your soil with our organic fertilizers and microbial blends — no chemicals, just nature-backed solutions for lasting fertility and healthy growth.",
    description:
      "We offer sustainable solutions for eco-friendly agriculture in the UAE",
  },
  {
    src: "hero3.webp",
    heading: "Healthy Soil, Healthy Future",
    subheading:
      "Building soil health today ensures food security, sustainability, and greener generations tomorrow — naturally and organically with AgriCare Planet.",
    description: "Nourish your crops with our scientifically tested compost",
  },
];

export default function Banner() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = imageData[selectedIndex];
  // Always show the first index for content

  // Auto-slide on mobile only
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % imageData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-auto bg-cover bg-center py-16 lg:py-28 transition-all duration-500"
      style={{
        backgroundImage: `url(/images/${imageData[selectedIndex].src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-5 lg:px-28">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.5 }}
              >
                <h5 className="text-2xl lg:text-4xl font-bold mt-0 lg:mt-5 mb-5 leading-tight ">
                  {selected.heading}
                </h5>
                <h1 className="text-lg lg:text-xl font-semibold">
                  {selected.subheading}
                </h1>

                {/* <p className="mb-8">{selected.description}</p> */}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center lg:justify-start gap-4 mt-8">
              <Link
                href="/services"
                className="px-6 py-3 bg-[#2d7372] text-white font-medium rounded-md text-center"
              >
                Explore Services
              </Link>
              <Link
                href="/about-us"
                className="px-6 py-3 bg-white text-[#2d7372] font-medium rounded-md text-center"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right image grid — hidden on mobile */}
          <div className="hidden md:grid w-full lg:w-1/2 grid-cols-3 lg:grid-cols-3 gap-4">
            {imageData.map((item, i) => (
              <div
                key={i}
                className={`w-full h-[200px] lg:h-[350px] relative rounded overflow-hidden shadow-md cursor-pointer transition-transform duration-300 ${
                  i === selectedIndex ? "ring-2 ring-[#2d7372] scale-105" : ""
                }`}
                onClick={() => setSelectedIndex(i)}
              >
                <Image
                  src={`/images/${item.src}`}
                  alt={`Soil sample ${i + 1}`}
                  fill
                  className="object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-black/70 to-transparent z-10" />

                {/* Show the main heading from the first object */}
                <span className="absolute bottom-4 w-full text-white text-base font-semibold text-center px-2 z-20">
                  {item.heading}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
