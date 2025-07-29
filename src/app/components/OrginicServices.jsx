"use client";

import Image from "next/image";
import Link from "next/link";

export default function OrganicServices() {
  const services = [
    {
      title: "Organic Fertilizers",
      desc: "Agricare Planet offers a range of organic fertilizers specially designed to nourish the soil without harming the environment. Our fertilizers enhance crop yield, improve soil health, and ensure sustainable farming practices.",
      image: "/images/soil2.webp",
      link: "/services/organic-fertilizers",
    },
    {
      title: "Desert Soil Reclamation",
      desc: "With cutting-edge technology, we specialize in reclaiming desert soil, making it arable for agricultural use. Through carefully formulated soil amendments, we bring life back to otherwise unusable land.",
      image: "/images/agri.webp",
      link: "/services/desert-soil-reclamation",
    },
    {
      title: "Waste Management Solutions",
      desc: "Our waste management services reduce environmental impact by recycling organic waste into valuable fertilizer products. We aim to decrease landfill dependency, contributing to a cleaner UAE.",
      image: "/images/agriphos.webp",
      link: "/services/waste-management",
    },
  ];

  return (
    <section className="charity-section bg-[#F8F8F8] py-16">
      <div className="container mx-auto px-5 lg:px-28 ">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div className="col-md-4 px-0 lg:px-4 mb-0 lg:mb-8" key={idx}>
              <article className="charity-item bg-white shadow-md rounded-md overflow-hidden h-full flex flex-col justify-between">
                <figure className="charity-image relative w-full h-[350px] bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </figure>
                <div className="charity-content p-3 lg:p-6 flex flex-col justify-between flex-grow">
                  <h4 className="text-xl font-semibold mb-3 text-[#2d7372]">
                    {service.title}
                  </h4>
                  <p className="text-lg text-justify  ">{service.desc}</p>
                  <Link
                    href={service.link}
                    className="button-round-primary bg-[#2d7372] hover:bg-green-700 text-center text-white py-2  inline-block mt-auto"
                  >
                    Learn More
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
