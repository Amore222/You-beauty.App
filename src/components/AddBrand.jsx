import React from "react";
import pink_shoe from "../assets/pink_scrub.jpeg";
import kid_two from "../assets/face-mask.jpeg";
import melula_visual from "../assets/rice-facewash.jpeg";

function Shop() {
  return (
    <section className="grid grid-cols-[60%_40%] grid-rows-2 h-screen w-screen gap-0 p-0 m-0">
      <img
        src={kid_two}
        alt="kid_two"
        className="row-span-2 w-full h-full object-cover"
      />
      <img
        src={pink_shoe}
        alt="pink_shoe"
        className="w-full h-full object-cover"
      />
      <img
        src={melula_visual}
        alt="melula_visual"
        className="w-full h-full object-cover"
      />
    </section>
  );
}

export default Shop;
