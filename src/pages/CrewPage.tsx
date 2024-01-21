import React from "react";
import SpaceBackgroundCrewPhone from "../assets/crew/background-crew-mobile.jpg";

function CrewPage() {
  return (
    <section id="crew" className="Page hidden h-dvh w-dvw absolute top-0 left-0">
      <img
        src={SpaceBackgroundCrewPhone}
        alt="Background crew"
        className="w-dvw h-dvh absolute top-0 left-0"
      />
    </section>
  );
}

export default CrewPage;
