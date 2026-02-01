import React from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/shared/Footer";

function ContactPage() {
    return (
        <div className="relative min-h-screen gradient-secondary">
            <Navbar />
            <Hero
                title="Contact Us"
                subtitle="We'd love to hear from you. Get in touch for wholesale inquiries or just to say hello."
                showButton={false}
            />
            <Contact />
            <Footer />
        </div>
    );
}

export default ContactPage;
