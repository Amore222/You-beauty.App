import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import product1 from "../assets/product1.jpg";

function Hero() {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#d07849]/20 via-[#e49f86]/30 to-[#e3a362]/20">

      {/* Background Image */}
      <img
        ref={imageRef}
        src={product1}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        {/* Headline */}
        <h1 className="text-[#d07849] text-4xl md:text-6xl font-serif font-semibold leading-tight mb-6 animate-fadeUp">
          <span className="block animate-slideUp delay-100">
            Embrace Your True Beauty
          </span>
          <span className="block animate-slideUp delay-200">
            One Step at a Time
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-[#e49f86] text-lg md:text-xl mb-12 leading-relaxed animate-fadeUp delay-300">
          Discover premium skincare and self-care products crafted to enhance your natural glow.
          At You Beauty, every product is designed to celebrate diversity, confidence, and elegance.
        </p>

        {/* CTA Button */}
        {/* CTA Button */}
        <Link
          to="/shop"
          className="animate-slideUp delay-400 bg-[#e3a362] text-white text-lg font-semibold uppercase px-9 py-5 rounded-full tracking-wider transition-all duration-200 hover:bg-[#d07849] hover:scale-105 shadow-lg inline-block"
        >
          Visit Our Shop
        </Link>
      </div>
    </section>
  );
}

export default Hero;
