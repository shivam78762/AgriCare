"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer relative lg:mt-8 pt-8">
      <div className="absolute -mt-20 left-0 w-full z-0 rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            opacity="0.33"
            className="fill-[#2d7372]"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 
         c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          />
          <path
            // opacity="0.88"
            className="fill-[#2d7372]"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 
         s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          />
          {/* <path
            className="fill-[#2d7372]"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,
         132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          /> */}
        </svg>
      </div>
      {/* <div
        className="h-20 relative bg-top-right md:bg-center bg-cover hidden lg:block"
        style={{ backgroundImage: "url(/images/footer-bg.webp)" }}
      >
        <div className="absolute z-40 bottom-0 left-0 w-full leading-[0]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-[140px]"
          >
            <path
              fill="#2d7372"
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9
                c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4
                c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6
                C72,58.2,0,25.8,0,25.8V100h1000V65.3
                c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
            ></path>
          </svg>
        </div>
      </div> */}

      <div className="footer-info bg-[#2d7372] text-white relative">
        <div className="container mx-auto px-5 md:px-12 xl:px-32 pt-8">
          <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-5 justify-between mb-8">
            <div className="w-full lg:w-[30%] space-y-4">
              {/* <Link href="/">
                <Image
                  src="/images/footerLogo.webp"
                  alt="Logo"
                  width={224}
                  height={56}
                  className="w-36 lg:w-56"
                />
              </Link> */}
              <Link
                href="/"
                className="text-2xl font-bold text-white tracking-wide"
              >
               <Image src="/images/LOGO.webp" width={400} height={400} alt="" />
              </Link>

              <p className="text-base lg:mt-4">
                Agricare Planet is to deliver innovative, reliable, and
                affordable energy solutions that respect the environment and
                uplift the communities we serve.
              </p>
              <div className="flex text-white items-center text-xl gap-x-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
                >
                  <FaInstagram className="text-[#2d7372] text-xl" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
                >
                  <FaFacebookF className="text-[#2d7372] text-xl" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
                >
                  <FaYoutube className="text-[#2d7372] text-xl" />
                </a>
                <a
                  href="https://lindekin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
                >
                  <FaLinkedin className="text-[#2d7372] text-xl" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
                >
                  <FaX className="text-[#2d7372] text-xl" />
                </a>
              </div>
            </div>

            <div className="footer-links space-y-4">
              <h5 className="text-xl font-bold">Quick Link :</h5>
              <ul className="space-y-2 text-sm">
                {[
                  ["/services", "Our Services"],
                  ["/about-us", "About Us"],
                  ["/contact-us", "Contact Us"],
                  ["/our-gallery", "Our Gallery"],
                  ["/blogs", "Blogs"],
                ].map(([href, label], i) => (
                  <li
                    key={i}
                    className="hover:text-[#c3c9c5] text-base cursor-pointer transition-colors duration-300"
                  >
                    <Link href={href} className="flex items-center gap-x-2">
                      <span className="text-white font-bold">»</span> {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links space-y-4">
              <h5 className="text-xl font-bold">Services :</h5>
              <ul className="space-y-2 text-sm">
                {[
                  ["/soil-food", "Soil Food"],
                  ["/soil-food-4g-plus", "Soil Food 4G-Plus"],
                  ["/agriphos", "Agriphos"],
                  ["/agri-potash", "Ari Potash"],
                  ["/soil-food-5g-plus", "Soil Food 5G-Plus"],
                ].map(([href, label], i) => (
                  <li
                    key={i}
                    className="hover:text-[#c3c9c5] text-base cursor-pointer transition-colors duration-300"
                  >
                    <Link href={href} className="flex items-center gap-x-2">
                      <span className="text-white font-bold">»</span> {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 lg:w-[35%] xl:w-[30%] flex flex-col items-start">
              <h5 className="text-xl font-bold">Our Address :</h5>
              <div className="flex items-start gap-x-2 text-lg text-white hover:text-[#c3c9c5] transition-colors duration-200">
                <FaMapMarkerAlt className="text-white mt-1" />
                <p className="text-base">
                  Compass Coworking Centre Al Shohada Road Al Hamra Industrial
                  Zone - FZ - Ras Al Khaimah
                </p>
              </div>
              <div className="flex flex-col gap-y-2 text-lg">
                <div className="flex items-center gap-x-4">
                  <a
                    href="tel:+971 585589552"
                    className="flex items-center gap-x-2 hover:text-[#c3c9c5] text-base"
                  >
                    <FaPhone className="text-white" />
                    +971 585589552
                  </a>
                  {/* <span>/</span> */}
                  {/* <a
                    href="tel:0426722199"
                    className="flex items-center gap-x-2 hover:text-[#c3c9c5] text-base"
                  >
                    <FaPhone className="text-white" />0426722199
                  </a> */}
                </div>
                <a
                  href="mailto:agricareplanetuae@gmail.com"
                  className="flex items-center gap-x-2 hover:text-[#c3c9c5] text-base"
                >
                  <FaEnvelope className="text-white" />
                  agricareplanetuae@gmail.com
                </a>
              </div>
            </div>
          </div>

          <hr className="relative z-10" />

          <div className="py-5 container mx-auto relative z-10">
            <div className="md:flex flex-wrap lg:justify-center gap-x-2 items-center text-sm text-white justify-center">
              <p className="text-center text-white hover:text-gray-100 transition-colors duration-200">
                © 2024 Agricare Planet All rights reserved.{" "}
                <i> Designed by Future IT Touch Pvt Ltd</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
