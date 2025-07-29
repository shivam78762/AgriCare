import React from "react";
import InnerBanner from "../components/Banner";
import Image from "next/image";
import LeftContent from "../components/LeftContent";
import WhyCHoose from "../components/WhyCHoose";
import Contact from "../components/FormComponent";

const page = () => {
  return (
    <>
      <InnerBanner title="Agriphos" />

      <section className="single-page-section pt-16 pb-10 px-5 lg:px-28">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}

          <div className="w-full lg:w-2/3">
            {/* Feature Image */}
            <figure className="single-feature-img mb-10">
              <Image
                src="/images/5g.webp"
                alt="Feature Image"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
            </figure>

            {/* Page Content */}
            <div className="page-content text-gray-700 space-y-6">
              <section className="py-12 px-5 lg:px-10 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-3xl font-bold text-green-700 mb-6">
                    Benefits of Soil Food 5G Plus (Organic Manure)
                  </h2>

                  <ul className="list-decimal list-inside space-y-2 text-lg text-gray-800">
                    <li>
                      Provides all the nutrients required by plants, though in
                      limited quantities.
                    </li>
                    <li>
                      Maintains the C:N ratio and improves soil fertility and
                      productivity.
                    </li>
                    <li>
                      Enhances the physical, chemical, and biological properties
                      of the soil.
                    </li>
                    <li>Improves both the structure and texture of soils.</li>
                    <li>Increases the water holding capacity of the soil.</li>
                    <li>
                      Boosts biological activity, making deeper nutrients
                      available to plants.
                    </li>
                    <li>
                      Acts as much, minimizing moisture evaporation losses from
                      the soil.
                    </li>
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
                              Parameter
                            </th>
                            <th className="p-3 border border-gray-300">
                              Value
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Moisture (max % by weight)
                            </td>
                            <td className="p-3 border border-gray-300">
                              25.0%
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Particle size (Min. 90% material through 4.0 mm IS
                              sieve)
                            </td>
                            <td className="p-3 border border-gray-300">
                              Compliant
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Bulk density (g/cm²)
                            </td>
                            <td className="p-3 border border-gray-300">
                              &lt; 1.0
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Total organic carbon (% by weight, min)
                            </td>
                            <td className="p-3 border border-gray-300">
                              14.0%
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Total nitrogen (N, % by weight, min)
                            </td>
                            <td className="p-3 border border-gray-300">0.5%</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Total phosphates (P<sub>2</sub>O<sub>5</sub>, % by
                              weight, min)
                            </td>
                            <td className="p-3 border border-gray-300">0.5%</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Total potash (K<sub>2</sub>O, % by weight, min)
                            </td>
                            <td className="p-3 border border-gray-300">0.5%</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              NPK nutrients (N + P<sub>2</sub>O<sub>5</sub> + K
                              <sub>2</sub>O)
                            </td>
                            <td className="p-3 border border-gray-300">≥ 3%</td>
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
