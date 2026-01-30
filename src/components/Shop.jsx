import React from "react";
import shampoo from "../assets/honey-wax.jpeg";
import serum from "../assets/skincare-oil.jpg";
import skincare from "../assets/organic-oil.jpeg";

function Shop() {
  return (
    <section className="grid grid-cols-[1fr_2fr] grid-rows-2 h-screen w-screen gap-0">
      
      
      <img
        src={shampoo}
        alt="shampoo"
        className="col-start-2 col-end-3 row-start-1 row-end-3 w-full h-full object-cover"
      />

      
      <img
        src={serum}
        alt="serum"
        className="col-start-1 col-end-2 row-start-1 row-end-2 w-full h-full object-cover"
      />

    
      <img
        src={skincare}
        alt="skincare"
        className="col-start-1 col-end-2 row-start-2 row-end-3 w-full h-full object-cover"
      />

    </section>
  );
}

export default Shop;
