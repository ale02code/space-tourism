import React, { useEffect, useState } from "react";
import SpaceBackgroundCrewPhone from "../assets/crew/background-crew-mobile.jpg";
import { TitleSection } from "../components/TitleSection";
import crewDouglas from "../assets/crew/image-douglas-hurley.webp";
import crewMark from "../assets/crew/image-mark-shuttleworth.webp";
import crewVictor from "../assets/crew/image-victor-glover.webp";
import crewAnsary from "../assets/crew/image-anousheh-ansari.webp";

const API_ROUTE: string = "src/data.json";

function CrewPage() {
  const [useDataCrew, setUseDataCrew] = useState([]);
  const [numberEmployeeCrew, setNumberEmployeeCrew] = useState({
    currentCrew: 0,
    imageEmployee: crewDouglas,
  });

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
        setUseDataCrew(crew[numberEmployeeCrew.currentCrew]);
      });
  }, [numberEmployeeCrew]);

  const getID = (id: number) => {
    const crewEmployee = document.querySelectorAll(".select-crew");
    crewEmployee.forEach((employee) => {
      if (employee.id === id) {
        employee.classList.add("active");
        console.log(true);
      } else {
        employee.classList.remove("active");
        console.log(false);
      }
    });
  };

  return (
    <section
      id="crew"
      className="Page hidden h-dvh w-dvw absolute top-0 left-0 flex justify-around items-center flex-col"
    >
      <img
        src={SpaceBackgroundCrewPhone}
        alt="Background crew"
        className="w-dvw h-dvh absolute top-0 left-0"
      />

      <article className="h-[85%] w-[85%] mx-auto relative z-20 flex justify-center items-center flex-col text-white">
        <TitleSection numberSection={2} titleSection="meet your crew" />

        <figure className="h-[40%] my-5">
          <img
            className="h-full"
            src={numberEmployeeCrew.imageEmployee}
            alt="employee"
          />
        </figure>

        <div className="mb-5 flex gap-3">
          <div
            id="1"
            className="h-6 w-6 bg-white rounded-full select-crew"
            onClick={() => {
              setNumberEmployeeCrew({
                currentCrew: 0,
                imageEmployee: crewDouglas,
              });

              getID(0);
            }}
          ></div>
          <div
            id="2"
            className="h-6 w-6 bg-neutral-400 rounded-full select-crew"
            onClick={() => {
              setNumberEmployeeCrew({
                currentCrew: 1,
                imageEmployee: crewMark,
              });

              getID(1);
            }}
          ></div>
          <div
            id="3"
            className="h-6 w-6 bg-neutral-400 rounded-full select-crew"
            onClick={() => {
              setNumberEmployeeCrew({
                currentCrew: 2,
                imageEmployee: crewVictor,
              });
              getID(2);
            }}
          ></div>
          <div
            id="4"
            className="h-6 w-6 bg-neutral-400 rounded-full select-crew"
            onClick={() => {
              setNumberEmployeeCrew({
                currentCrew: 3,
                imageEmployee: crewAnsary,
              });
              getID(3);
            }}
          ></div>
        </div>

        <section className="text-center uppercase">
          <div className="mb-3">
            <h3 className="font-Bellefair text-xl text-neutral-400">
              {useDataCrew.role}
            </h3>
            <h5 className="font-Bellefair text-3xl">{useDataCrew.name}</h5>
          </div>
          <p className="text-balance text-lg normal-case">{useDataCrew.bio}</p>
        </section>
      </article>
    </section>
  );
}

export default CrewPage;
