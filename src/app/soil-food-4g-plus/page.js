import React from "react";
import InnerBanner from "../components/Banner";
import Image from "next/image";
import LeftContent from "../components/LeftContent";
import WhyCHoose from "../components/WhyCHoose";
import Contact from "../components/FormComponent";

const page = () => {
  return (
    <>
      <InnerBanner title="Soil Food 4G-Plus" />

      <section className="single-page-section pt-16 pb-10 px-5 lg:px-28">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}

          <div className="w-full lg:w-2/3">
            <figure className="single-feature-img ">
              <Image
                src="/images/4g.webp"
                alt="Feature Image"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
            </figure>

            {/* Page Content */}
            <div className="page-content text-gray-700 space-y-6 my-10">
              <section className="py-12 px-5 lg:px-10 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-xl lg:text-3xl font-bold text-green-700 mb-6">
                    Soil Food 4G-PLUS is enriched modified vermicompost and it
                    is in granular form.
                  </h2>

                  <p className="text-justify text-lg">
                    Soil Food 4G-PLUS is an enriched, modified vermicompost
                    formulated in granular form. Designed to enhance soil
                    fertility and plant health, it combines the benefits of
                    traditional vermicompost with advanced nutrient enrichment.
                    Its granular texture ensures easy application, improved soil
                    structure, and better nutrient absorption for crops.
                  </p>
                </div>
              </section>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <img
                src="/images/soil-food.webp"
                alt="Image 1"
                className="w-full h-[350px] rounded-lg shadow-md"
              />
              <img
                src="/images/soil-food2.webp"
                alt="Image 2"
                className="w-full h-[350px] rounded-lg shadow-md"
              />
              <img
                src="/images/soil-food3.webp"
                alt="Image 3"
                className="w-full h-[350px] rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24">
              <LeftContent />
            </div>
          </div>
        </div>
      </section>
      <WhyCHoose />
      <Contact />
    </>
  );
};

export default page;
