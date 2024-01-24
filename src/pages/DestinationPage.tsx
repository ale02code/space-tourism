import React from "react";
import SpaceBackgroundDestinationPhone from "../assets/destination/background-destination-mobile.jpg";
import MoonImage from "../assets/destination/image-moon.png";
function DestinationPage() {
  return (
    <section
      id="destination"
      className="Page hidden h-dvh w-dvw absolute top-0 left-0 flex justify-center items-center"
    >
      <img
        src={SpaceBackgroundDestinationPhone}
        alt="background destination"
        className="w-dvw h-dvh absolute top-0 left-0"
      />

      <main className="w-[85%] h-[80%] mx-auto text-white text-center flex flex-col items-center justify-center relative z-20">
        <h5>
          <span>01</span> Pick your destination
        </h5>

        <div className="flex justify-center items-center h-[40%] w-full">
          <img
            src={MoonImage}
            alt="Moon image"
            title="Moon"
            className="h-full"
          />
        </div>

        <nav className="w-full">
          <ul className="flex justify-normal items-center">
            <li>Moon</li>
            <li>Mars</li>
            <li>Europa</li>
            <li>Titan</li>
          </ul>
        </nav>

        <article>
          <section>
            <strong>Moon</strong>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </section>

          <hr />

          <section>
            <strong>AVG, DISTANCE</strong>
            <br />
            <strong>225 MIL. KM</strong>
          </section>
        </article>
      </main>
    </section>
  );
}

export default DestinationPage;
