"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import Image from "next/image";

const services = [
  { title: "Desert Soil Reclamation", href: "/desert-soil-reclamation" },
  {
    title: "Organic Fertilizers and Manures",
    submenu: [
      { title: "Soil Food", href: "/soil-food" },
      { title: "Soil Food 4G-Plus", href: "/soil-food-4g-plus" },
      { title: "Agriphos", href: "/agriphos" },
      { title: "Agri Potash", href: "/agri-potash" },
      { title: "Soil Food 5G-Plus", href: "/soil-food-5g-plus" },
    ],
  },
  { title: "Landscaping and AMC", href: "/landscaping-and-amc" },
  { title: "Waste Management", href: "/waste-management" },
  { title: "Consultancy", href: "/consultancy" },
];

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [openSubmenuTitle, setOpenSubmenuTitle] = useState(null);

  return (
    <header className="w-full sticky top-0 shadow-md z-50 bg-white">
      <div className="container mx-auto px-5 lg:px-28  flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-[#2d7372] tracking-wide">
          {/* Agricare <span className="text-[#2d7372]">Planet</span> */}
          <Image
            src="/images/LOGO.webp"
            width={400}
            height={400}
            alt=""
            className="w-[70%] lg:w-full h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 items-center font-medium text-[#333] text-lg">
          <Link href="/" className="hover:text-[#2d7372] transition">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-[#2d7372] transition">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            <button className="flex items-center gap-1 hover:text-[#2d7372] transition">
              Services <FaAngleDown size={14} />
            </button>

            {isDropdownOpen && (
              <ul
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="absolute top-full left-0 w-64 mt-4 bg-white shadow-lg border-t border-[#2d7372] z-50"
              >
                {services.map((item, idx) => (
                  <li
                    key={idx}
                    className="group relative border-b border-dashed last:border-none"
                  >
                    {item.submenu ? (
                      <div className="block px-4 py-2 text-base relative cursor-default">
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                          {item.title}
                        </span>
                        <span className="absolute inset-0 before:absolute before:inset-0 before:scale-x-0 before:origin-left before:bg-[#2d7372] before:transition-transform before:duration-300 group-hover:before:scale-x-100"></span>

                        {/* Submenu */}
                        <ul
                          onMouseEnter={() => setIsDropdownOpen(true)}
                          onMouseLeave={() => setIsDropdownOpen(false)}
                          className="absolute top-0 right-full ml-1 w-64 bg-white shadow-lg border-t border-[#2d7372] z-50 hidden group-hover:block group-hover:translate-x-0 transform transition duration-200 ease-in-out"
                        >
                          {item.submenu.map((sub, subIdx) => (
                            <li
                              key={subIdx}
                              className="border-b border-dashed last:border-none"
                            >
                              <Link
                                href={sub.href}
                                className="block px-4 py-2 text-base hover:text-[#2d7372] transition"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-base relative overflow-hidden"
                      >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                          {item.title}
                        </span>
                        <span className="absolute inset-0 before:absolute before:inset-0 before:scale-x-0 before:origin-left before:bg-[#2d7372] before:transition-transform before:duration-300 group-hover:before:scale-x-100"></span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="/our-gallery" className="hover:text-[#2d7372] transition">
            Gallery
          </Link>
          <Link href="/blogs" className="hover:text-[#2d7372] transition">
            Blog
          </Link>
          <Link href="/contact-us" className="hover:text-[#2d7372] transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-[#2d7372]"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <FaBars size={22} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 shadow-lg ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
          <span className="text-lg font-semibold text-[#2d7372]">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <FaTimes
              size={20}
              className="text-gray-700 hover:text-red-600 transition"
            />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="px-5 py-4 text-[#333] font-medium">
          <li className="border-b border-gray-100 py-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#2d7372]"
            >
              Home
            </Link>
          </li>

          <li className="border-b border-gray-100 py-2">
            <Link
              href="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#2d7372]"
            >
              About Us
            </Link>
          </li>

          {/* Mobile Dropdown */}
          <li className="border-b border-gray-100 py-2">
            <div className="w-full flex justify-between items-center">
              <span className="text-[#2d7372] font-semibold">Our Services</span>
              <FaAngleDown
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className={`cursor-pointer transition-transform duration-300 ${
                  isMobileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isMobileDropdownOpen && (
              <ul className="pl-3 mt-2 text-sm text-gray-700">
                {services.map((item, idx) => (
                  <li key={idx} className="py-2">
                    {item.submenu ? (
                      <>
                        <div
                          className="flex justify-between items-center font-semibold text-[#2d7372] cursor-pointer"
                          onClick={() =>
                            setOpenSubmenuTitle(
                              openSubmenuTitle === item.title
                                ? null
                                : item.title
                            )
                          }
                        >
                          <span>{item.title}</span>
                          <FaAngleDown
                            className={`transition-transform duration-300 ${
                              openSubmenuTitle === item.title
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </div>

                        {/* Submenu Items */}
                        {openSubmenuTitle === item.title && (
                          <ul className="pl-4 mt-1">
                            {item.submenu.map((sub, subIdx) => (
                              <li key={subIdx} className="py-1">
                                <Link
                                  href={sub.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setOpenSubmenuTitle(null);
                                    setIsMobileDropdownOpen(false);
                                  }}
                                  className="hover:text-[#097562] transition"
                                >
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileDropdownOpen(false);
                        }}
                        className="hover:text-[#097562] transition"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="border-b border-gray-100 py-2">
            <Link
              href="/our-gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#2d7372]"
            >
              Gallery
            </Link>
          </li>

          <li className="border-b border-gray-100 py-2">
            <Link
              href="/blogs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#2d7372]"
            >
              Blogs
            </Link>
          </li>

          <li className="border-b border-gray-100 py-2">
            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#2d7372]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
