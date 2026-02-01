import React from "react";
import kid from "../assets/organic-oil.jpeg";
import brown_one from "../assets/facebit.jpeg";
import brown_two from "../assets/honey-wax.jpeg";

function Brand() {
  return (
    <section className="grid grid-cols-[1fr_2fr] grid-rows-2 gap-0 h-screen w-screen">
      {/* First image: spans 2 rows in the second column */}
      <img
        src={brown_one}
        alt="brown_one"
        className="col-start-2 col-end-3 row-start-1 row-end-3 w-full h-full object-cover"
      />
      {/* Second image: first column, first row */}
      <img
        src={kid}
        alt="kid"
        className="col-start-1 col-end-2 row-start-1 row-end-2 w-full h-full object-cover"
      />
      {/* Third image: first column, second row */}
      <img
        src={brown_two}
        alt="brown_two"
        className="col-start-1 col-end-2 row-start-2 row-end-3 w-full h-full object-cover"
      />
    </section>
  );
}

export default Brand;
