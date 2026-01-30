import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import beauty from "../../assets/you-beauty.png";

function Navbar() {
  const { getCartCount } = useCart();
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-transparent transition-all duration-500">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-gradient italic no-underline hover:scale-105 transition-all duration-300 drop-shadow-[0_2px_10px_rgba(208,120,73,0.5)]">
        You Beauty
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center gap-12 list-none m-0 p-0">
        <li>
          <Link
            to="/shop"
            className="text-white text-sm font-black tracking-[0.2em] no-underline hover:text-accent-light transition-all duration-300 relative group uppercase drop-shadow-lg"
          >
            Shop
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full shadow-lg"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white text-sm font-black tracking-[0.2em] no-underline hover:text-accent-light transition-all duration-300 relative group uppercase drop-shadow-lg"
          >
            About
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full shadow-lg"></span>
          </Link>
        </li>
      </ul>

      {/* Cart */}
      <Link to="/cart" className="relative text-white cursor-pointer hover:scale-110 transition-transform duration-300 group drop-shadow-xl">
        <ShoppingCart size={32} className="group-hover:text-accent transition-colors" />
        {getCartCount() > 0 && (
          <span className="absolute -top-2 -right-2 gradient-primary text-white text-[10px] font-black px-2 py-1 rounded-full animate-pulse shadow-2xl border-2 border-white">
            {getCartCount()}
          </span>
        )}
      </Link>
    </nav>
  );
}

export default Navbar;
