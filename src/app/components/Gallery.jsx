import React from "react";

export default function Gallery() {
  const services = [
    {
      title: "Transforming Desert Landscapes into Fertile Soil",
      image: "/images/gallary/gallary1.webp",
      height: "h-[330px]",
      colSpan: "col-span-1 md:col-span-2", // full width
    },
    {
      title: "Innovative Organic Fertilizers for Agriculture",
      image: "/images/farmers-planting-crops.webp",
      height: "h-[330px]",
      colSpan: "col-span-1",
    },
    {
      title: "Eco-Friendly Waste Management Solutions",
      image: "/images/gallary/gallary.webp",
      height: "h-[250px]",
      colSpan: "col-span-1",
    },
    {
      title: "Promoting Sustainable Agriculture Practices",
      image: "/images/gallary/gallary2.webp",
      height: "h-[250px]",
      colSpan: "col-span-1",
    },
    {
      title: "Enhancing Soil Health for a Greener Future",
      image: "/images/gallary/gallary3.webp",
      height: "h-[250px]",
      colSpan: "col-span-1",
    },
    {
      title: "Comprehensive Desert Reclamation Projects",
      image: "/images/after.webp",
      height: "h-[330px]",
      colSpan: "col-span-1",
    },
    {
      title: "Integrated Agriculture and Waste Solutions",
      image: "/images/chooseBanner.webp",
      height: "h-[330px]",
      colSpan: "col-span-1 md:col-span-2", // full width
    },
  ];

  return (
    <>
      <div className="bg-white  py-16 px-4 lg:px-28">
        <div className="container mx-auto">
          <div className="text-4xl font-bold relative text-center mb-6">
            {/* <span className="absolute text-4xl opacity-10 -top-2 text-wrap lg:text-nowrap font-extrabold pointer-events-none select-none">
              Agricare Planet Services
            </span> */}
            <span className="text-[#2d7372] relative inline-block">
              Agricare Planet Services
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative w-full ${service.height} ${service.colSpan} overflow-hidden rounded-md`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                {/* Gradient overlay from bottom to top */}
                <div className="absolute bottom-0 w-full h-36 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 right-4 text-white font-extrabold text-lg md:text-2xl drop-shadow-lg z-10">
                  {service.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
