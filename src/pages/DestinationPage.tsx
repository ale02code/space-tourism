import React, { useEffect, useState } from "react";
import SpaceBackgroundDestinationPhone from "../assets/destination/background-destination-mobile.jpg";
import { TitleSection } from "../components/TitleSection";
import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";

function DestinationPage() {
  interface Destination {
    name: string;
    description: string;
    travel: string;
    distance: string;
  }

  const [useDataPlanet, setUseDataPlanet] = useState<Destination>();
  const [planet, setPlanet] = useState({
    name: moon,
    currentPlanet: 0,
  });

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res}`);
        }
        return res.json();
      })
      .then((data) => {
        const { destinations } = data;
        setUseDataPlanet(destinations[planet.currentPlanet]);
      });
  }, [planet]);

  return (
    <section
      id="destination"
      className="Page hidden h-dvh w-dvw absolute top-0 left-0"
    >
      <img
        src={SpaceBackgroundDestinationPhone}
        alt="background destination"
        className="w-dvw h-dvh absolute top-0 left-0"
      />

      <main className="w-full h-[87%] mx-auto text-white text-center absolute bottom-0 left-0 z-20">
        <div className="w-[85%] mx-auto h-full flex justify-evenly items-center flex-col overflow-hidden">
          <TitleSection
            numberSection={1}
            titleSection="Pick your destination"
          />

          {useDataPlanet ? (
            <div className="flex justify-center items-center h-[35%] w-full">
              <img
                src={planet.name}
                alt={`${useDataPlanet?.name} image`}
                title={useDataPlanet?.name}
                className="h-full"
              />
            </div>
          ) : (
            <p className="tbl:text-3xl">Loading...</p>
          )}

          <nav className="w-full">
            <ul className="flex justify-around items-center">
              <li
                onClick={() => {
                  setPlanet({
                    name: moon,
                    currentPlanet: 0,
                  });
                }}
                className="tracking-wider uppercase text-2xl tbl:text-4xl"
              >
                Moon
              </li>
              <li
                onClick={() => {
                  setPlanet({
                    name: mars,
                    currentPlanet: 1,
                  });
                }}
                className="tracking-wider uppercase text-2xl tbl:text-4xl"
              >
                Mars
              </li>
              <li
                onClick={() => {
                  setPlanet({
                    name: europa,
                    currentPlanet: 2,
                  });
                }}
                className="tracking-wider uppercase text-2xl tbl:text-4xl"
              >
                Europa
              </li>
              <li
                onClick={() => {
                  setPlanet({
                    name: titan,
                    currentPlanet: 3,
                  });
                }}
                className="tracking-wider uppercase text-2xl tbl:text-4xl"
              >
                Titan
              </li>
            </ul>
          </nav>

          <article className="flex justify-around items-center flex-col">
            <section>
              <strong className="text-5xl uppercase tracking-wide font-Bellefair">
                {useDataPlanet?.name}
              </strong>
              <p className="text-pretty text-xl tbl:text-2xl">
                {useDataPlanet?.description}
              </p>
            </section>

            <hr className="w-full my-3 text-gray-600" />

            <section>
              <strong className="text-3xl uppercase font-Bellefair tbl:text-4xl">
                {useDataPlanet?.travel}
              </strong>
              <br />
              <strong className="text-3xl uppercase font-Bellefair tbl:text-4xl">
                {useDataPlanet?.distance}
              </strong>
            </section>
          </article>
        </div>
      </main>
    </section>
  );
}

export default DestinationPage;
