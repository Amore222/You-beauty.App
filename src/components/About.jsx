import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="gradient-primary py-20 md:py-32 text-left relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif leading-tight animate-slide-up">
          You Beauty Natural Products
        </h1>

        <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          You Beauty is a modern natural beauty brand focused on self-care, simplicity, and balance.
          Designed in Denmark and produced with integrity in Portugal, we bring you the finest nature has to offer.
        </p>

        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-white font-bold text-lg hover:gap-4 transition-all duration-300 group"
        >
          Read our story
          <span className="w-10 h-0.5 bg-white transition-all duration-300 group-hover:w-16"></span>
        </Link>
      </div>
    </section>
  );
}

export default About;
