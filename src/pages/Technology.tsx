import React from "react";
import SpaceBackgroundTechnologyPhone from "../assets/technology/background-technology-mobile.jpg";

function Technology() {
  return (
    <section
      id="technology"
      className="Page hidden h-dvh w-dvw absolute top-0 left-0"
    >
      <img
        src={SpaceBackgroundTechnologyPhone}
        alt="Background technology"
        className="w-dvw h-dvh absolute top-0 left-0"
      />
    </section>
  );
}

export default Technology;
