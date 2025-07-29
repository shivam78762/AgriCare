"use client";
import React from "react";
import Image from "next/image";
import InnerBanner from "../components/Banner";
import Link from "next/link";

export default function LandscapeSections() {
  const sections = [
    {
      title: "Soil Food",
      description:
        "Vermicompost (vermi-compost) is the product of the decomposition process using various species of worms, usually red wigglers, white worms, and other earthworms, to create a mixture of decomposing vegetable or food waste, bedding materials, and vermicast. This process is called vermicomposting, while the rearing of worms for this purpose is called vermiculture.",
      image: "/images/soil-Capture.webp",
      link: "/soil-food",
    },
    {
      title: "Soil Food 4G-Plus",
      description:
        "Soil Food 4G-PLUS is an enriched and modified vermicompost available in granular form, designed to improve soil health and boost plant growth. Its unique formulation enhances soil fertility by increasing microbial activity and improving soil structure. The granular form ensures easy application and even distribution in the field. Ideal for sustainable farming practices, Soil Food 4G-PLUS supports healthy root development, improves nutrient absorption, and promotes long-term soil productivity without leaving harmful residues.",
      image: "/images/4g.webp",
      link: "/soil-",
    },
    {
      title: "Agriphos",
      description:
        " Phosphate rich organic manure is a type of fertilizer used as an alternative to diammonium phosphate and single super phosphate.Phosphorus is required by all plants but is limited in soil,creating a problem in agriculture In many areas phosphorus must be added to soil for the extensive plant growth that is desired for crop production. AGRIPHOS( PROM) is also known as a GreenChemistry phosphatic fertilizer.",
      image: "/images/agriphos.webp",
      link: "/agriphos",
    },
    {
      title: "Ari Potash",
      description:
        " Agri Potash is manufactured from molasses. Molasses the honey-like viscous syrup, is the most valuable by-product from the sugar industry. It is residual syrup obtained during production of sugar  in sugar factories. Agri Potash natural potash is a potassium rich fertilizer.",
      image: "/images/agri.webp",
      link: "/agri-potash",
    },
    {
      title: "Soil Food 5G-Plus",
      description:
        "Soil Food 5G Plus (Organic manure) provides all the nutrients that are required by plants but in limited quantities. It helps in maintaining C:N ratio in the soil and also increases the fertility and productivity of the soil. It improves the physical, chemical and biological properties of the soil. It improves both the structure and texture of the soils",
      image: "/images/5g.webp",
      link: "/soil-food-5g-plus",
    },
  ];

  return (
    <>
      <InnerBanner title="Services" />
      <div className="w-full px-5 lg:px-28 pb-10">
        {sections.map((section, i) => {
          const isOdd = i % 2 === 1;

          return (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-12 px-0 lg:px-6  border-b ${
                isOdd ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`${
                  isOdd ? "order-1 md:order-2" : "order-2 md:order-1"
                } text-center md:text-left space-y-4`}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase">
                  {section.title}
                </h2>
                <p className="text-gray-700 text-lg text-justify leading-relaxed">
                  {section.description}
                </p>
                <Link
                  href={section.link}
                  className="inline-flex items-center justify-center px-6 py-2 border-2 border-green-300 text-[#2d7372] hover:bg-green-200 transition-all duration-300 rounded-md"
                >
                  Read More <span className="ml-2">➞</span>
                </Link>
              </div>

              {/* Image */}
              <div
                className={`relative w-full h-80 md:h-[400px] ${
                  isOdd ? "order-2 md:order-1" : "order-1 md:order-2"
                }`}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
