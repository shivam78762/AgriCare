import Image from 'next/image';
import React from 'react'

const CoreValues = () => {

    const services = [
    {
      title: "Sustainability",
      img: "/images/planet-earth.webp",
      desc: "At Agricare Planet, sustainability is the foundation of everything we do.",
      link: "/donate",
      label: "DONATE NOW",
    },
    {
      title: "Innovation",
      img: "/images/idea.webp",
      desc: "Innovation drives our approach to transforming desert soil into fertile land.",
      link: "/volunteer",
      label: "JOIN US NOW",
    },
    {
      title: "Environmental Stewardship",
      img: "/images/environmental-awareness.webp",
      desc: "Agricare Planet actively works to reduce landfill dependency and promote circular economy practices.",
      link: "/donate",
      label: "DONATE NOW",
    },
    {
      title: "Quality & Integrity",
      img: "/images/improvement.webp",
      desc: "We uphold the highest standards in our products, services, and partnerships. ",
      link: "/volunteer",
      label: "JOIN US NOW",
    },
  ];

  return (
    <>
       <div>
          {/* Services Grid */}
          <div className="py-16  mx-5 lg:mx-28">
            <div className="container mx-auto ">
              <div className="text-4xl font-bold relative text-center flex flex-col items-center justify-center mb-6">
                {/* Faint background text */}
                {/* <span className="absolute text-4xl opacity-10 -top-2 font-extrabold pointer-events-none select-none">
                  Core Values
                </span> */}

                {/* Foreground heading with SVG */}
                <span className="text-[#2d7372] relative inline-block">
                  Core Values
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((item, index) => (
                  <div key={index} className="service-item">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={60}
                        height={60}
                      />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-lg text-gray-800">{item.desc}</p>
                    {/* <Link
                      href={item.link}
                      className={`inline-block px-4 py-2 text-white transition rounded-full text-sm ${
                        item.label === "DONATE NOW"
                          ? "bg-[#2d7372]  hover:bg-[#142318]"
                          : "bg-[#be854c] hover:bg-[#a37241] "
                      }`}
                    >
                      {item.label}
                    </Link> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> 
    </>
  )
}

export default CoreValues
