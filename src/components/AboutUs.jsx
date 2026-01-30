import React from "react";
import about from "../assets/beauty-brand.jpg";

function AboutUs() {
  return (
    <section className="bg-transparent flex flex-col justify-center items-center px-5 py-24 min-h-[60vh]">
      <div className="text-center max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 font-serif">
          Our Brand Community
        </h2>

        <div className="w-full flex justify-center transform hover:scale-[1.02] transition-transform duration-500">
          <img
            src={about}
            alt="Brands"
            className="w-full max-w-3xl h-auto object-contain bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-4 border-white/50"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
