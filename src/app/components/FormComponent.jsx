"use client";
import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaPhoneVolume } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";

export default function Contact() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateFields = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateFields();
    if (!isValid) return;

    setLoading(true);
    const { name, email, phone, message, service } = formData;

    try {
      const response = await axios.post(
        "https://sendingmail-2.onrender.com/sendmail",
        {
          S_name: name,
          S_email: email,
          S_phone: phone,
          message,
          S_services: service,
          userEmailsir2: "agricareplanetuae@gmail.com",
        }
      );

      Swal.fire("Success", "Your message has been sent!", "success");
      setFormData({
        name: "",
        email: "",
        service: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      Swal.fire("Error", "Failed to send message.", "error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white px-4 lg:px-28 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
              Feel Free To Contact & {""}
              <span className="text-[#2d7372] relative inline-block">
                {""} Reach Us!
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-green-300 -z-10"></span>
              </span>
            </h2>

            <div className="space-y-5 mt-3">
              <div className="border border-gray-300 rounded-md p-4 flex items-start gap-4">
                <div className="min-w-[40px] min-h-[40px] lg:min-w-[80px] lg:min-h-[80px] rounded-full bg-[#2d7372] flex items-center justify-center text-white text-2xl">
                  <FaLocationDot className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-lg md:text-lg text-gray-900">
                    Head office address :
                  </h3>
                  <p className="text-lg text-gray-700 text-justify">
                    Compass Coworking Centre Al Shohada Road{" "}
                    <br className="hidden lg:block" /> Al Hamra Industrial Zone
                    - FZ - Ras Al Khaimah
                  </p>
                </div>
              </div>

              <div className="border border-gray-300 rounded-md p-4 flex items-start gap-4">
                <div className="min-w-[40px] min-h-[40px] lg:min-w-[80px] lg:min-h-[80px] rounded-full bg-[#2d7372] flex items-center justify-center text-white text-2xl">
                  <FaPhoneAlt className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-lg md:text-lg text-gray-900">
                    Call Us :
                  </h3>
                  <p className="text-lg text-gray-700">
                    Mobile-no: +971 585589552
                  </p>
                </div>
              </div>

              <div className="border border-gray-300 rounded-md p-4 flex items-start gap-4">
                <div className="min-w-[40px] min-h-[40px] lg:min-w-[80px] lg:min-h-[80px] rounded-full bg-[#2d7372] flex items-center justify-center text-white text-2xl">
                  <HiOutlineMailOpen className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-lg md:text-lg text-gray-900">
                    Email address :
                  </h3>
                  <p className="text-lg text-gray-700">
                    agricareplanetuae@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-10 lg:mt-0">
            <div
              className="relative bg-cover bg-center rounded-md overflow-hidden"
              style={{ backgroundImage: `url('/images/contact-us-bg.webp')` }}
            >
              <div className="bg-black bg-opacity-50 p-6 h-full">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  We are ready to assist you. Please leave a message.
                </h2>
                <form className="space-y-6" onSubmit={formSubmit}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Name*"
                      className={`bg-white px-5 py-4 shadow-lg w-full focus:outline-none focus:ring-2 ${
                        errors.name ? "ring-red-500" : "focus:ring-[#2d7372]"
                      } placeholder:text-gray-500`}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email*"
                      className={`bg-white px-5 py-4 shadow-lg w-full focus:outline-none focus:ring-2 ${
                        errors.email ? "ring-red-500" : "focus:ring-[#2d7372]"
                      } placeholder:text-gray-500`}
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`bg-white px-5 py-4 shadow-lg w-full focus:outline-none focus:ring-2 ${
                        errors.service ? "ring-red-500" : "focus:ring-[#2d7372]"
                      } text-gray-700`}
                    >
                      <option value="" disabled>
                        Select Services*
                      </option>
                      <option value="Soil Food">SOIL FOOD</option>
                      <option value="SOIL FOOD 4G-PLUS">
                        SOIL FOOD 4G-PLUS
                      </option>
                      <option value="Agriphos">AGRIPHOS</option>
                      <option value="AGRI POTASH">AGRI POTASH</option>
                      <option value="SOIL FOOD 5G-PLUS">
                        SOIL FOOD 5G-PLUS
                      </option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Number*"
                      className={`bg-white px-5 py-4 shadow-lg w-full focus:outline-none focus:ring-2 ${
                        errors.phone ? "ring-red-500" : "focus:ring-[#2d7372]"
                      } placeholder:text-gray-500`}
                    />
                  </div>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Message*"
                    rows="5"
                    className="bg-white px-5 py-4 shadow-lg w-full focus:outline-none focus:ring-2 focus:ring-[#2d7372] placeholder:text-gray-500 resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#2d7372] hover:bg-green-500 text-white font-bold px-6 py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg"
                  >
                    {loading ? "Sending..." : "Submit Now"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
