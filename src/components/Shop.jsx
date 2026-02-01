import React from "react";
import { Link } from "react-router-dom";
import shampoo from "../assets/skin-tone.jpeg";
import serum from "../assets/prod.jpeg";
import skincare from "../assets/natural.jpg";

function Shop() {
  return (
    <Link to="/shop">
      <section className="grid grid-cols-[60%_40%] grid-rows-2 h-screen w-screen gap-0 p-0 m-0 cursor-pointer">
        <img
          src={shampoo}
          alt="shampoo"
          className="row-span-2 w-full h-full object-cover hover:opacity-95 transition-opacity"
        />
        <img
          src={serum}
          alt="serum"
          className="w-full h-full object-cover hover:opacity-95 transition-opacity"
        />
        <img
          src={skincare}
          alt="skincare"
          className="w-full h-full object-cover hover:opacity-95 transition-opacity"
        />
      </section>
    </Link>
  );
}

export default Shop;
