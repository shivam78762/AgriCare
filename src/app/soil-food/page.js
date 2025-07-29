import React from "react";
import InnerBanner from "../components/Banner";
import Image from "next/image";
import LeftContent from "../components/LeftContent";
import WhyCHoose from "../components/WhyCHoose";
import Contact from "../components/FormComponent";

const page = () => {
  return (
    <>
      <InnerBanner title="Soil Food" image="/images/inner-banner-img-1.webp" />

      <section className="single-page-section pt-16 pb-10 px-5 lg:px-28">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}

          <div className="w-full lg:w-2/3">
            {/* Feature Image */}
            <figure className="single-feature-img mb-10">
              <Image
                src="/images/soil-Capture.webp"
                alt="Feature Image"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
            </figure>

            {/* Page Content */}
            <div className="page-content text-gray-700 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Vermicompost (vermi-compost)
              </h2>

              <p className="text-justify text-lg">
                is the product of the decomposition process using various
                species of worms, usually red wigglers, white worms, and other
                earthworms, to create a mixture of decomposing vegetable or food
                waste, bedding materials, and vermicast. This process is called
                vermicomposting, while the rearing of worms for this purpose is
                called vermiculture.
              </p>

              <h2 className="text-xl font-bold text-gray-900">
                Benefits of Soil
              </h2>
              {/* Bullet List */}
              <ul className="list-disc list-inside space-y-2 text-justify text-lg">
                <li>Improves soil aeration</li>
                <li>
                  Enriches soil with micro-organisms (adding enzymes such as
                  phosphatase and cellulase)
                </li>
                <li>
                  Microbial activity in worm castings is 10 to 20 times higher
                  than in the soil and organic matter that the worm ingests[41]
                </li>
                <li>
                  Attracts deep-burrowing earthworms already present in the soil
                </li>
                <li>Improves water holding capacity[42]</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900">Plant growth</h2>

              <div className="space-y-6 text-lg text-justify text-gray-800">
                {/* Paragraph for general plant benefits */}

                <ul className="list-disc list-inside space-y-2">
                  <li>Enhances germination, plant growth, and crop yield</li>
                  <li>Improves root growth and structure</li>
                  <li>
                    Enriches soil with micro-organisms (adding plant hormones
                    such as auxins and gibberellic acid)[citation need]
                  </li>
                </ul>

                {/* List of physical properties */}
                <span className="text-lg font-semibold mb-2">Vermicompost</span>
                <ul className="list-[upper-roman] list-inside space-y-2">
                  <li>Moisture content: 15.0% - 25.0% by weight</li>
                  <li>Color: Dark brown to black</li>
                  <li>Odor: Absence of foul odor</li>
                  <li>
                    Particle size: Minimum 90% material should pass through 4.0
                    mm IS sieve
                  </li>
                  <li>Bulk density: 0.7 - 0.9 g/cm³</li>
                  <li>Total Organic Carbon: Minimum 18.0% by weight</li>
                  <li>Total Nitrogen (as N): Minimum 1.0% by weight</li>
                  <li>Total Phosphate (as P₂O₅): Minimum 0.8% by weight</li>
                  <li>Total Potassium (as K₂O): Minimum 0.8% by weight</li>
                </ul>

                <div className="">
                  <h3 className="text-lg font-semibold mb-4">
                    (x) Heavy Metal Content{" "}
                    <span className="text-sm text-gray-600">
                      (as mg/Kg), maximum
                    </span>
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2 text-lg text-gray-700">
                    <div>Cadmium (as Cd)</div>
                    <div>5.00</div>
                    <div>Chromium (as Cr)</div>
                    <div>50.00</div>
                    <div>Nickel (as Ni)</div>
                    <div>50.00</div>
                    <div>Lead (as Pb)</div>
                    <div>100.00</div>
                  </div>

                  <div className="mt-6">
                    <p className="text-lg text-justify text-gray-800 font-medium">
                      <strong>TOLERANCE LIMIT OF ORGANIC FERTILISER:</strong> A
                      sum total of nitrogen, phosphorus, and potassium nutrients
                      shall be not less than <strong>2.5%</strong> in case of
                      vermicompost.
                    </p>
                  </div>
                </div>
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
