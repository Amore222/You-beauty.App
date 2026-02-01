import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaPinterest, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#d07849] text-white px-5 py-10 text-center">

      <div className="flex flex-col items-center gap-8">

        {/* Address Info */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-xs">
          <div className="flex flex-col leading-none">
            <span className="text-[20px] font-serif italic" style={{ color: "#e49f86" }}>
              You
            </span>
            <span className="text-[10px] tracking-[0.35em] font-medium uppercase -mt-1" style={{ color: "#e3a362" }}>
              Beauty
            </span>
          </div>
          <span>11 Dannevirkegate,</span>
          <span>København, 1763,</span>
          <span>Denmark</span>
          <a
            href="mailto:hello@youbeauty.com"
            className="block w-full text-white hover:underline mt-1"
          >
            hello@youbeauty.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="http://instagram.com/you_beauty/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/youbeauty/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:scale-110 transition-transform"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.pinterest.com/you_beauty/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="hover:scale-110 transition-transform"
          >
            <FaPinterest />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row gap-4 text-[10px] font-semibold uppercase tracking-wide">
          <Link to="/contact" className="hover:text-gray-300">
            Contact &amp; Wholesale
          </Link>
          <Link to="/terms-and-conditions" className="hover:text-gray-300">
            Terms and conditions
          </Link>
          <Link to="/shipping-returns" className="hover:text-gray-300">
            Shipping &amp; Returns
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
