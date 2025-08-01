"use client";

import React from "react";
import InnerBanner from "../components/Banner";

export default function ConsultancyPage() {
  return (
    <>
      <InnerBanner title="Consultancy" />
      <section className="bg-white px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className=" text-lg max-w-2xl mx-auto">
              At AgriCare Planet FZ LLC, we don’t just supply products — we
              offer science-based agricultural and environmental consultancy
              services tailored to the needs of our clients across the UAE and
              India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D7372]">
                🌿 Our Consultancy Covers:
              </h2>
              <ul className="list-disc list-inside  space-y-3">
                <li>
                  <strong>Land Reclamation Feasibility Studies:</strong> Site
                  visits, soil analysis, water availability assessment, and
                  project planning for turning sandy or degraded lands into
                  fertile soil.
                </li>
                <li>
                  <strong>Organic Farming Advisory:</strong> End-to-end guidance
                  on switching to or scaling organic cultivation, from nutrient
                  planning to pest management using natural solutions.
                </li>
                <li>
                  <strong>Landscape Design & Planning:</strong> Customized
                  designs for commercial, residential, and institutional
                  projects, including native plant selection, irrigation layout,
                  and AMC planning.
                </li>
                <li>
                  <strong>Soil Testing & Nutrient Management Plans:</strong>{" "}
                  Scientific testing and recommendations to enhance soil health
                  and crop productivity, especially in arid or depleted areas.
                </li>
                <li>
                  <strong>Environmental Impact & Sustainability Audits:</strong>{" "}
                  Support for green certifications, ESG goals, and eco-friendly
                  transformation strategies for farms, villas, and corporate
                  facilities.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-[#f0fdf9] p-8 shadow-lg border border-[#c0ebe6] flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-[#2D7372] mb-4">
                Why Choose Our Consultancy?
              </h3>
              <ul className="space-y-4 ">
                <li className="flex items-start gap-3">
                  <span className="text-[#2D7372] text-lg">✅</span>
                  Reclaim land with expert-backed feasibility
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2D7372] text-lg">✅</span>
                  Optimize yields with organic farming solutions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2D7372] text-lg">✅</span>
                  Sustainable designs with native expertise
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2D7372] text-lg">✅</span>
                  Cost-effective soil health strategies
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2D7372] text-lg">✅</span>
                  Align with green goals and ESG targets
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg ">
              Whether you’re reclaiming land, greening a villa, or planning a
              large-scale organic farm — our consultancy helps you save cost,
              time, and the environment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
