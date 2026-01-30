import React from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/shared/Footer";
import About from "../components/About";
import Beauty_Prod from "../components/Beauty_Prod";
import Shop from "../components/Shop";
import Contact from "../components/Contact";
import addBrand from "../components/AddBrand";

function HomePage() {
    return (
        <div className="relative min-h-screen gradient-secondary">
            <Navbar />

            <Hero
                title="Your Natural Glow Awaits"
                subtitle="Experience the purity of Scandinavian design combined with nature's finest organic ingredients."
            />

            <Beauty_Prod />
            <About />
            <Shop />
            <addBrand />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomePage;
