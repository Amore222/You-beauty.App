import React from "react";
import hairoil from "../assets/hair-oil.jpeg";
import pinkscrub from "../assets/pink-scrub.jpeg";
import handbody  from "../assets/honey-wax.jpeg";
import perfume from "../assets/Perfume.jpeg";
import ricecleanser from "../assets/Rice-cleanser.jpeg";
import ricehandbody from "../assets/facebit.jpeg";



function Beauty_Prod() {
  return (
    <section className="grid grid-cols-[60%_40%] grid-rows-2 h-screen w-screen p-0 m-0 gap-0">
      
      {/* Big left image */}
      <img
        src={ricecleanser}
        alt="pink-scrub"
        className="row-span-2 col-span-1 w-full h-full object-cover block"
      />

      {/* Top right image */}
      <img
        src={ricehandbody}
        alt="hair-oil"
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
