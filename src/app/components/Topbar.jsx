"use client";

import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="hidden lg:block topbar bg-[#2d7372] text-white text-[14px] px-28 py-1 border-b-2 border-b-[#2d7372]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center py-2">
          {/* Contact Info */}
          <div className="flex space-x-4 items-center mb-2 md:mb-0">
            <ul className="flex items-end sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <li className="flex items-center pr-3 mr-3 lg:mr-0">
                <a className="flex items-center" href="tel:+971 585589552">
                  <FaPhoneAlt className="mr-2 text-[#be854c]" />
                  <span className="">+971 585589552</span>
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-[#be854c]" />
                <a className="" href="mailto:agricareplanetuae@gmail.com">
                  agricareplanetuae@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <ul className="flex space-x-4 items-center">
             <li>
                <a
                 href="https://www.instagram.com/agricareorganic/?igsh=ZmFhOHVrbGJ2NHo%3D&utm_source=qr#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:text-[#be854c]" />
                </a>
              </li>
              <li>
                <a
                 href="https://www.facebook.com/share/1CLE8n7Z4P/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="hover:text-[#be854c]" />
                </a>
              </li>
               <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="" />
                </a>
              </li>
                 <li>
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="hover:text-[#be854c]" />
                </a>
              </li>
             
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="hover:text-[#be854c]" />
                </a>
              </li>
             
           
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
