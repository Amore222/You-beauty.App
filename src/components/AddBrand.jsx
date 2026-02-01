import React from "react";
import pink_shoe from "../assets/skincare-oil.jpg";
import kid_two from "../assets/face-mask.jpeg";
import melula_visual from "../assets/mosture-cream.jpeg";

function Shop() {
  return (
    <section className="grid grid-cols-[60%_40%] grid-rows-2 h-screen w-screen gap-0">
      
      {/* Left image (spans both rows) */}
      <img
        src={kid_two}
        alt="kid_two"
        className="row-span-2 w-full h-full object-cover"
      />

      {/* Top-right image */}
      <img
        src={pink_shoe}
        alt="pink_shoe"
        className="w-full h-full object-cover"
      />

      {/* Bottom-right image with white background */}
        <img
          src={melula_visual}
          alt="melula_visual"
          className="w-full h-full object-cover"
        />
   
   </section>
  );
}

export default Shop;
