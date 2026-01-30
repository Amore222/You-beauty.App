import React from "react";
import scrub from "../assets/scrub.jpg";
import cream_scrub from "../assets/cream-scrub.jpeg";
// import scarf from "../assets/scarf.jpg";

function ProductGrid() {
  return (
    <section className="w-full flex flex-wrap overflow-hidden md:flex-row flex-col">
      {/* Image 1 */}
      <img
        src={scrub}
        alt="Scrub"
        className="
          w-full md:w-1/2
          h-auto md:h-screen
          object-contain md:object-cover
          max-h-[40vh] sm:max-h-[60vh] md:max-h-none
          transition-all duration-300
        "
      />

      {/* Image 2 */}
      <img
        src={cream_scrub}
        alt="Cream Scrub"
        className="
          w-full md:w-1/2
          h-auto md:h-screen
          object-contain md:object-cover
          max-h-[40vh] sm:max-h-[60vh] md:max-h-none
          transition-all duration-300
        "
      />
    </section>
  );
}

export default ProductGrid;
