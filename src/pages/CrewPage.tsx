import React, { useEffect, useState } from "react";
import SpaceBackgroundCrewPhone from "../assets/crew/background-crew-mobile.jpg";
import { TitleSection } from "../components/TitleSection";
import crewVictor from "../assets/crew/image-victor-glover.webp";
import crewDouglas from "../assets/crew/image-douglas-hurley.webp";
import crewMark from "../assets/crew/image-mark-shuttleworth.webp";
import crewAnsary from "../assets/crew/image-anousheh-ansari.webp";

const API_ROUTE: string = "src/data.json";

function CrewPage() {
  const [useDataCrew, setUseDataCrew] = useState([]);

  useEffect(() => {
    fetch(API_ROUTE)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res}`);
        }
        return res.json();
      })
      .then((data) => {
        const { crew } = data;
        setUseDataCrew(crew);
        console.log(crew);
      });
  }, []);

  return (
    <section
      id="crew"
      className="Page hidden h-dvh w-dvw absolute top-0 left-0 flex justify-end items-center flex-col"
    >
      <img
        src={SpaceBackgroundCrewPhone}
        alt="Background crew"
        className="w-dvw h-dvh absolute top-0 left-0"
      />

      <article className="h-[85%] relative z-20 flex justify-center items-center flex-col text-white">
        <TitleSection numberSection={2} titleSection="meet your crew" />
      </article>
    </section>
  );
}

export default CrewPage;
