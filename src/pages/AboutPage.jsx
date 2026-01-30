import React from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/Hero";
import AboutContent from "../components/AboutContent";
import Footer from "../components/shared/Footer";

function AboutPage() {
  return (
    <div className="relative min-h-screen gradient-secondary">
      <Navbar />
      <Hero
        title="Our Natural Story"
        subtitle="Born in Denmark, inspired by simplicity, and crafted with love for a cleaner, more radiant you."
        showButton={false}
      />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default AboutPage;
