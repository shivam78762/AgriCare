"use client";

import React from "react";

export default function InnerBanner({ title }) {
  return (
    <section className="relative">
      <div
        className="container mx-auto relative bg-cover bg-center bg-no-repeat  py-10 lg:py-20 overflow-hidden before-layer after-layer"
        style={{ backgroundImage: `url("/images/banner.webp")` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-2xl lg:text-3xl md:text-5xl font-bold text-white relative inline-block">
            {title}
            <span className="block w-16 h-1 mt-3 mx-auto bg-[#2d7372] rounded-full" />
          </h1>
        </div>
      </div>

      <style jsx>{`
        .before-layer::before,
        .after-layer::after {
          content: "";
          position: absolute;
          width: 150%;
          height: 150%;
          border-radius: 50%;
          transform: rotate(15deg);
          opacity: 0.05;
          z-index: 0;
          pointer-events: none;
        }

        .before-layer::before {
          top: -30%;
          left: -25%;
          background: radial-gradient(
            circle at center,
            #22c55e 0%,
            transparent 70%
          );
        }

        .after-layer::after {
          bottom: -30%;
          right: -25%;
          background: radial-gradient(
            circle at center,
            #16a34a 0%,
            transparent 70%
          );
        }
      `}</style>
    </section>
  );
}
