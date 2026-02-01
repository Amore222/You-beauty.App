import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const { getCartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = getCartCount();

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* ✨ Animated Text Logo */}
        <div className="flex flex-col leading-none cursor-pointer hover:opacity-90 transition-opacity duration-300">
          <span
            className="text-[26px] font-serif italic opacity-0
                       animate-[fadeIn_1s_ease-out_forwards]"
            style={{ color: "#e49f86" }}
          >
            You
          </span>

          <span
            className="text-[14px] tracking-[0.35em] font-medium uppercase -mt-1
                       opacity-0 animate-[fadeIn_1s_ease-out_forwards]
                       [animation-delay:200ms]"
            style={{ color: "#e3a362" }}
          >
            Beauty
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {["SHOP", "ABOUT"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-[#e3a362] text-sm font-medium tracking-[0.15em]
                           hover:text-[#d07849] transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <Link to="/cart" className="relative cursor-pointer">
            <ShoppingCart size={24} className="text-white" />
            <span
              className="absolute -top-2 -right-2 text-white text-[11px]
                          font-semibold px-1.5 py-0.5 rounded-full"
              style={{ backgroundColor: "#d07849" }}
            >
              {cartCount}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={26} className="text-[#e3a362]" />
            ) : (
              <Menu size={26} className="text-[#e3a362]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fff3eb] shadow-lg animate-fade-in">
          <ul className="flex flex-col items-center gap-6 py-8">
            {["SHOP", "ABOUT"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#d07849] text-sm font-semibold tracking-[0.15em] hover:text-[#e49f86] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
