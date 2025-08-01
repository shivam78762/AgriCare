"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function OrganicServices() {
  const services = [
    {
      title: "Organic Fertilizers",
      desc: "Agricare Planet offers a range of organic fertilizers specially  to nourish the soil without harming the environment. Our fertilizers enhance crop yield, improve soil health, and ensure sustainable farming practices.",
      image: "/images/soil2.webp",
      link: "/services",
    },
    {
      title: "Desert Soil Reclamation",
      desc: "With cutting-edge technology, we specialize in reclaiming desert soil, making it arable for agricultural use. Through carefully formulated soil amendments, we bring life back to otherwise unusable land.",
      image: "/images/agri.webp",
      link: "/desert-soil-reclamation",
    },
    {
      title: "Waste Management Solutions",
      desc: "Our waste management services reduce environmental impact by recycling organic waste into valuable fertilizer products. We aim to decrease landfill dependency, contributing to a cleaner UAE.",
      image: "/images/agriphos.webp",
      link: "/services",
    },
  ];

  return (
    <section className="bg-[#F8F8F8] py-16">
      <div className="container mx-auto px-5 lg:px-28">
        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-20"
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <article className="bg-white shadow-md rounded-md overflow-hidden h-full flex flex-col justify-between">
                <figure className="relative w-full h-[350px] bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </figure>
                <div className="p-4 lg:p-6 flex flex-col justify-between flex-grow">
                  <h4 className="text-xl font-semibold mb-3 text-[#2d7372]">
                    {service.title}
                  </h4>
                  <p className="text-lg text-justify">{service.desc}</p>
                  <Link
                    href={service.link}
                    className="bg-[#2d7372] mt-2 hover:bg-[#2d7372c9] text-white py-2 text-center inline-block rounded"
                  >
                    Learn More
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
          .swiper-pagination {
            margin-bottom: 0px !important;
            position: relative !important;
            text-align: center;
          }
        `}</style>
      </div>
    </section>
  );
}
