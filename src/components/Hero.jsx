import React from "react";
import { Link } from "react-router-dom";
import product1 from "../assets/product1.jpg";

function Hero({
  title = "Welcome to You Beauty",
  subtitle = "Discover premium beauty products that elevate your daily glow",
  backgroundImage = product1,
  showButton = true,
  scrollToId = null
}) {
  const handleScroll = (e) => {
    if (scrollToId && scrollToId.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center h-[80vh] w-full px-5 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Gradient overlay with thematic colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/25 to-accent/30"></div>

      {/* Content on top of overlay */}
      <div className="relative z-10 animate-fade-in max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold italic mb-6 text-white drop-shadow-2xl animate-slide-up leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white mb-10 font-medium drop-shadow-lg max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>

        {showButton && (
          <Link
            to={scrollToId || "/shop"}
            onClick={handleScroll}
            className="inline-block px-12 py-5 gradient-primary text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-primary-light/50 transition-all duration-300 transform hover:scale-110 uppercase tracking-widest animate-pulse-slow"
          >
            Shop Now ✨
          </Link>
        )}
      </div>

      {/* Decorative floating elements */}
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/40 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}

export default Hero;
