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
                src="/images/agriphos.webp"
                alt="Feature Image"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
            </figure>

            {/* Page Content */}
            <div className="page-content text-gray-700 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                (PROM) Phosphate Rich Organic Manure
              </h2>

              <p className="text-justify text-lg">
                Phosphate rich organic manure is a type of fertilizer used as an
                alternative to diammonium phosphate and single super phosphate.
                Phosphorus is required by all plants but is limited in soil,
                creating a problem in agriculture In many areas phosphorus must
                be added to soil for the extensive plant growth that is desired
                for crop production. AGRIPHOS( PROM) is also known as a Green
                Chemistry phosphatic fertilizer. Research indicates that
                AGRIPHOS( PROM) may be a more efficient way of adding phosphorus
                to soil than applying chemical fertilizers. Otherbenefits of
                AGRIPHOS( PROM) are that it supplies phosphorus to the second
                crop planted in a treated area as efficiently as the first.
                Needless to say, the finer the rock phosphate the better is the
                agronomic efficiency of PROM. Research indicates that this
                substance may be a more efficient way of adding phosphorus to
                soil than applying chemical fertilizers.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full text-lg text-left text-gray-800 border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 font-medium">Granules Size</td>
                      <td className="p-3">1.5 mm to 3.5 mm</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 font-medium">Colour</td>
                      <td className="p-3">Black Grey / Brown</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 font-medium">Liter Weight</td>
                      <td className="p-3">1.26 kg / Liter</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 font-medium">
                        Moisture Absorption Capacity
                      </td>
                      <td className="p-3">6% to 7%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Granule Shape</td>
                      <td className="p-3">Round Granules</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full text-lg text-left text-gray-800 border border-gray-300">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="p-3 border border-gray-300">COMPONENTS</th>
                      <th className="p-3 border border-gray-300">CONTENTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Liter Weight</td>
                      <td className="p-3">1.26 kg / Liter</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Organic Carbon</td>
                      <td className="p-3">7.9 % (min)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">C:N Ratio</td>
                      <td className="p-3">&gt; 20:1</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Nitrogen</td>
                      <td className="p-3">0.4 % (min)</td>
                    </tr>
                    <tr>
                      <td className="p-3">Phosphates (P₂O₅)</td>
                      <td className="p-3">10.4 % (min)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">pH (1:5 solution)</td>
                      <td className="p-3">6.7 (max)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Moisture</td>
                      <td className="p-3">25.0% (max)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Particle Size</td>
                      <td className="p-3">
                        90% (min) material should pass through 4 mm IS Sieve
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Bulk Density (g/cm³)</td>
                      <td className="p-3">&gt; 1.6</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Conductivity (as dS/m)</td>
                      <td className="p-3">8.2</td>
                    </tr>
                    <tr className="border-b border-gray-300 bg-gray-50 font-semibold">
                      <td className="p-3" colSpan={2}>
                        Heavy Metal Content (as mg/kg)
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Lead (Pb)</td>
                      <td className="p-3">100.00 (max)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Copper (Cu)</td>
                      <td className="p-3">300.00 (max)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Nickel (Ni)</td>
                      <td className="p-3">50.00 (max)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Zinc (Zn)</td>
                      <td className="p-3">1000.00 (max)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Cadmium (Cd)</td>
                      <td className="p-3">5.00 (max)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Chromium</td>
                      <td className="p-3">50.00 (max)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3">Arsenic</td>
                      <td className="p-3">10.00 (max)</td>
                    </tr>
                    <tr>
                      <td className="p-3">Mercury</td>
                      <td className="p-3">0.15 (max)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sticky Left Sidebar */}
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
