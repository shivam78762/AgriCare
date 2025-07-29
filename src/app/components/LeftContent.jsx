"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function LeftContent() {
  const pathname = usePathname();

  const services = [
    { name: "Desert Soil Reclamation", href: "/desert-soil-reclamation" },
    { name: "Landscaping & AMC", href: "/landscaping-and-amc" },
    { name: "Soil Food 4G-Plus", href: "/soil-food-4g-plus" },
    { name: "Agriphos", href: "/agriphos" },
    { name: "Ari Potash", href: "/agri-potash" },
    { name: "Soil Food 5G-Plus", href: "/soil-food-5g-plus" },
  ];

  return (
    <div className="w-full order-2">
      <aside className="p-6 bg-white shadow-lg rounded-xl space-y-8 border border-gray-100">
        {/* Services List */}
        <div>
          <h2 className="relative text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-5">
            Services List
            <span className="absolute left-0 bottom-0 w-[50px] h-[2px] bg-[#2d7372]"></span>
          </h2>

          <ul className="space-y-2">
            {services.map((service) => {
              const isActive = pathname === service.href;

              return (
                <li key={service.name} className="relative group">
                  {/* Left Border Bar */}
                  <span
                    className={`absolute left-0 top-0 h-full w-1 rounded-r-md transition-all duration-300 ${
                      isActive
                        ? "bg-[#2d7372] opacity-100 visible"
                        : "bg-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                    }`}
                  ></span>

                  <Link
                    href={service.href}
                    className={`flex justify-between items-center pl-5 pr-4 py-3 rounded-r-lg text-lg font-medium transition-all duration-300
                      ${
                        isActive
                          ? "bg-green-100 text-[#2d7372] border border-green-300 shadow"
                          : "text-gray-700 hover:bg-green-50 hover:text-[#2d7372]"
                      }`}
                  >
                    <span>{service.name}</span>
                    <FaArrowRight
                      className={`ml-2 transition-transform duration-300 ease-in-out
    group-hover:translate-x-1
    ${
      isActive ? "text-[#2d7372]" : "text-gray-400 group-hover:text-[#2d7372]"
    }`}
                      size={14}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Help Box */}
      <div className="bg-[#f3f4f8] px-5 py-10 text-center mt-8 mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold relative pb-4 mb-6 inline-block">
          If You Need Any Help Contact With Us
          <span className="absolute left-1/2 bottom-0 w-[30px] h-[6px] bg-[#097562] rounded-[10px] transform -translate-x-1/2"></span>
        </h3>
        <br />
        <a
          href="tel:+971 585589552"
          title="Call now"
          className="text-[#097562] text-2xl font-bold transition duration-300 hover:text-[#075f50]"
        >
          +971 585589552
        </a>
      </div>
    </div>
  );
}
