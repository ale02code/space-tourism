import React from "react";
import SpaceBackgroundDestinationPhone from "../assets/destination/background-destination-mobile.jpg";
function DestinationPage() {
  return (
    <section id="destination" className="Page hidden h-dvh w-dvw absolute top-0 left-0">
      <img
        src={SpaceBackgroundDestinationPhone}
        alt="background destination"
        className="w-dvw h-dvh absolute top-0 left-0"
      />
    </section>
  );
}

export default DestinationPage;
