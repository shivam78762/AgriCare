import React from "react";
import InnerBanner from "../components/Banner";
import Image from "next/image";
import WhyCHoose from "../components/WhyCHoose";
import LeftContent from "../components/LeftContent";
import Contact from "../components/FormComponent";

const page = () => {
  return (
    <>
      <InnerBanner title="Agri Potash" />

      <section className="single-page-section pt-16 pb-10 px-5 lg:px-28">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}

          <div className="w-full lg:w-2/3">
            {/* Feature Image */}
            <figure className="single-feature-img mb-10">
              <Image
                src="/images/agri.webp"
                alt="Feature Image"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
            </figure>

            {/* Page Content */}
            <div className="page-content text-gray-700 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Agri Potash</h2>

              <p className="text-justify text-lg">
                Agri Potash is manufactured from molasses. Molasses the
                honey-like viscous syrup, is the most valuable by-product from
                the sugar industry. It is residual syrup obtained during
                production of sugar in sugar factories. Agri Potash natural
                potash is a potassium rich fertilizer.
              </p>

              <section className="py-12 bg-gray-50 px-5 lg:px-10">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-green-700">
                    Benefits of Agri Potash
                  </h2>

                  <ul className="list-decimal list-inside space-y-2 text-lg text-gray-800">
                    <li>
                      Agri Potash increases fertility of the soil and keeps
                      moisture in the soil for a longer time.
                    </li>
                    <li>
                      It increases availability by providing mobility to organic
                      potash and other elements.
                    </li>
                    <li>It helps to increase plant growth and immunity.</li>
                    <li>Its use stops the fall of roots and plants.</li>
                    <li>It increases crop maturity, grain size, and luster.</li>
                    <li>
                      It produces protein, enzyme, hormones, and carbohydrates
                      required for the plants.
                    </li>
                    <li>
                      Agri Potash encourages plants to adjust to dynamic weather
                      conditions.
                    </li>
                    <li>It strengthens stalks.</li>
                    <li>It absorbs more nutrients.</li>
                    <li>It increases the quantity and quality of yield.</li>
                  </ul>

                  <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-4 text-green-700">
                      Specifications
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left text-gray-800 border border-gray-300">
                        <thead className="bg-green-100 text-gray-900">
                          <tr>
                            <th className="p-3 border border-gray-300">
                              Parameter (by weight)
                            </th>
                            <th className="p-3 border border-gray-300">
                              Value
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-300">
                            <td className="p-3">Moisture % (minimum)</td>
                            <td className="p-3">5.0%</td>
                          </tr>
                          <tr>
                            <td className="p-3">
                              Water Soluble Potassium (as K<sub>2</sub>O) %
                              (minimum)
                            </td>
                            <td className="p-3">14.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
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
