import React from "react";
import about from "../assets/beauty-brand.jpg";

function AboutUs() {
  return (
    <section
      className="flex flex-col justify-center items-center px-5 py-16 min-h-screen
                 bg-gradient-to-b from-[#d07849]/20 via-[#e49f86]/20 to-[#e3a362]/20"
    >
      <div className="text-center max-w-4xl w-full text-[#d07849]">
        {/* Section Title */}
        <h1 className="text-2xl md:text-3xl font-light mb-8 text-white">
          They talk about us
        </h1>

        {/* Brand Image */}
        <div className="w-full flex justify-center">
          <img
            src={about}
            alt="Brands"
            className="w-full max-w-2xl h-auto object-contain
                       bg-white/80 p-4 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
