import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaPinterest, FaFacebookF } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-primary text-white py-16 px-10 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="container mx-auto flex flex-col items-center gap-12">
        {/* Branding & Mission */}
        <div className="text-center max-w-lg">
          <Link to="/" className="text-4xl font-black italic mb-4 block hover:scale-105 transition-transform">
            You Beauty
          </Link>
          <p className="text-white/80 font-medium text-sm leading-relaxed mb-8">
            Elevating your daily ritual with pure, organic, and ethically sourced beauty essentials
            inspired by Scandinavian simplicity.
          </p>

          <div className="flex justify-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:-translate-y-1">
              <FaInstagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:-translate-y-1">
              <FaFacebookF size={20} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:-translate-y-1">
              <FaPinterest size={20} />
            </a>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-center md:text-left border-t border-white/10 pt-12">
          <div className="space-y-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-white/60">Contact</h4>
            <div className="text-sm font-medium space-y-2">
              <p>152 Katlehong, Johannesburg,</p>
              <p>South Africa, 1431</p>
              <a href="mailto:ntiarose3@gmail.com" className="block text-white hover:text-accent transition-colors">ntiarose3@gmail.com</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-white/60">Explore</h4>
            <div className="text-sm font-medium flex flex-col gap-2">
              <Link to="/shop" className="hover:text-accent transition-colors">The Collection</Link>
              <Link to="/about" className="hover:text-accent transition-colors">Our Story</Link>
              <a href="#contact" className="hover:text-accent transition-colors">Join Community</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-white/60">Customer Care</h4>
            <div className="text-sm font-medium flex flex-col gap-2">
              <a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10 w-full">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            © {currentYear} You Beauty. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
