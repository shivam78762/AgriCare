"use client";
import React from "react";
import WhyCHoose from "../components/WhyCHoose";

export default function LandscapingPage() {
  return (
    <>
      <main className="bg-white text-gray-800 px-4 md:px-20 py-10 space-y-12">
        {/* Page Header */}
        <section className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#2d7372]">
            Landscaping & AMC Services
          </h1>
          <p className="text-lg mt-2 text-gray-600">
            Transforming Spaces, Sustaining Green Life
          </p>
        </section>

        {/* Introduction */}
        <section className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-green-700">
            Introduction
          </h2>
          <p>
            Size matters — but so does substance.{" "}
            <strong>Agricare Planet</strong> is now the UAE’s largest organic
            fertilizer supplier, thanks to our innovation, scale, and
            sustainability.
          </p>
          <ul className="list-disc pl-6">
            <li>Our production capacity and nationwide distribution</li>
            <li>Range of fertilizers tailored to regional soils</li>
            <li>Partnerships with local farms and municipalities</li>
            <li>Certifications and compliance with FCO, UAE MOCCAE</li>
          </ul>
          <p className="italic">
            We’re more than the biggest — we’re the most trusted in the region.
          </p>
        </section>

        {/* What We Offer */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            🌳 What We Offer
          </h2>
          <p className="mb-4">
            From concept to creation, our landscape architects and horticulture
            experts bring your outdoor vision to life.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Garden & Lawn Design (Residential & Commercial)</li>
              <li>Hardscaping (Pathways, Pergolas, Paving, Rock Features)</li>
              <li>
                Softscaping (Soil Preparation, Turfing, Trees & Flower Beds)
              </li>
              <li>Irrigation Systems (Drip & Sprinkler Installation)</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lighting & Decorative Elements</li>
              <li>Eco-friendly Vertical Gardens & Green Walls</li>
              <li>
                Scientific support for long-term soil fertility and plant health
              </li>
            </ul>
          </div>
        </section>

        {/* AMC Services */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            🛠️ Annual Maintenance Contracts (AMC)
          </h2>
          <p className="mb-4">
            Our AMC services guarantee your outdoor space remains lush, clean,
            and thriving all year round.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Lawn mowing & edge trimming</li>
            <li>Seasonal pruning & plant care</li>
            <li>Organic pest and disease control</li>
            <li>Soil testing & nutrient management</li>
            <li>Irrigation system inspection & maintenance</li>
            <li>Waste removal & green composting</li>
            <li>Monthly reporting with before-after photo logs</li>
          </ul>
          <p className="mt-4 italic">
            Available for residential, corporate, hotel, and community gardens —
            of any size.
          </p>
        </section>
      </main>
      <WhyCHoose />
    </>
  );
}
