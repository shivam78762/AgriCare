"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";

export default function Testimonials() {
  const testimonials = [
    {
      img: "",
      bg: ["#A1887F"],
      name: "Salma",
      position: "Desert Farmer",
      desc: "Since using the desert soil amendment, my crops have never looked healthier. Yields increased by 30% in just one season!",
      rating: 4.5,
    },
    {
      img: "",
      bg: ["#8D6E63"],
      name: "Omar Al-Farsi",
      position: "Landscape Architect",
      desc: "The soil blends are perfectly crafted. The plants are thriving even under harsh conditions—truly transformative.",
      rating: 4,
    },
    {
      img: "",
      bg: ["#6D4C41"],
      name: "Huda",
      position: "Home Gardener",
      desc: "I used the 4G-Plus mix on my rooftop garden. It retains moisture so well, and everything looks lush and vibrant!",
      rating: 3.5,
    },
    {
      img: "",
      bg: ["#5D4037"],
      name: "Fahad",
      position: "Agricultural Consultant",
      desc: "Agriphos and Agri Potash have balanced our soil pH and nutrient levels. Best investment for sustainable growth in arid zones.",
      rating: 5,
    },
    {
      img: "",
      bg: ["#4E342E"],
      name: "Sara",
      position: "Community Garden Lead",
      desc: "Our community garden flourished after switching to the Soil Food 5G-Plus line. Plants are stronger, healthier and producing more fruit!",
      rating: 4.5,
    },
  ];

  return (
    <div className="container bg-[#F8F8F8] relative mx-auto px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16">
      <div className="text-center flex flex-col items-center gap-y-2">
        <div className="text-4xl font-bold relative mb-6">
          {/* <span className="absolute text-4xl text-wrap lg:text-nowrap opacity-10 -top-2 font-extrabold pointer-events-none select-none">
            Our Happy Customers
          </span> */}
          <span className="text-[#2d7372] relative inline-block">
            Our Happy Customers
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
        <h5 className="text-[#0F2C49] text-base lg:text-lg md:font-bold leading-relaxed md:leading-tight">
          Hear from desert growers and landscapers who trusted our organic soil
          solutions for sustainable growth.
        </h5>
      </div>

      <div className="mt-10">
        <Swiper
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Autoplay]}
          className="mySwiper h-full"
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="bg-white rounded-3xl shadow-xl border border-[#2d7372] p-6 relative overflow-hidden flex flex-col justify-between h-full min-h-[250px] lg:min-h-[360px] group hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col items-center mt-0 lg:mt-6 mb-4">
                  <div
                    className="w-16 h-16 rounded-full border-4 border-green-200 shadow-md mb-2"
                    style={
                      testi.img
                        ? {
                            backgroundImage: `url(${testi.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }
                        : { backgroundColor: testi.bg[0] }
                    }
                  >
                    {!testi.img && (
                      <div className="h-full flex items-center justify-center text-white text-xl font-bold">
                        {testi.name[0]}
                      </div>
                    )}
                  </div>
                  <h4 className="text-[#0F2C49] font-bold text-lg">
                    {testi.name}
                  </h4>
                  <p className="text-green-700 text-sm">{testi.position}</p>
                </div>

                <div className="relative z-10 text-gray-600 text-sm md:text-base text-center  px-2 flex-grow">
                  <ImQuotesLeft className="text-green-200 text-3xl absolute top-0 left-2 opacity-20" />
                  <p className="line-clamp-5">{testi.desc}</p>
                  <ImQuotesLeft className="rotate-180 text-green-200 text-3xl absolute bottom-0 right-2 opacity-20" />
                </div>

                <div className="flex justify-center items-center gap-x-1 mt-auto pt-2">
                  {Array.from({ length: 5 }, (_, i) => {
                    const full = Math.floor(testi.rating);
                    const isHalf = testi.rating - full >= 0.5 && i === full;
                    if (i < full) {
                      return (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      );
                    } else if (isHalf) {
                      return (
                        <FaStarHalfAlt
                          key={i}
                          className="text-yellow-400 text-sm"
                        />
                      );
                    } else {
                      return (
                        <FaRegStar
                          key={i}
                          className="text-yellow-400 text-sm"
                        />
                      );
                    }
                  })}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
