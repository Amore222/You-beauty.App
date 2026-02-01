import React from "react";
import handbody  from "../assets/skin-glow.jpeg";
import ricecleanser from "../assets/vitamin-scrub.jpeg";
import ricehandbody from "../assets/Makeup.jpeg";



function Beauty_Prod() {
  return (
    <section className="grid grid-cols-[60%_40%] grid-rows-2 h-screen w-screen p-0 m-0 gap-0">
      
      {/* Big left image */}
      <img
        src={ricecleanser}
        alt="rice-cleanser"
        className="row-span-2 col-span-1 w-full h-full object-cover block"
      />

      {/* Top right image */}
      <img
        src={ricehandbody}
        alt="rice-hand-body"
        className="row-span-1 col-span-1 w-full h-full object-cover block"
      />

      {/* Bottom right image */}
      <img
        src={handbody}
        alt="hand-body"
        className="row-span-1 col-span-1 w-full h-full object-cover block"
      />

    </section>
  );
}

export default Beauty_Prod;
