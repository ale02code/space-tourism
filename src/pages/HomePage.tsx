import React from "react";
import SpaceBackgroundHomePhone from "../assets/home/background-home-mobile.jpg";

function HomePage() {
  return (
    <div
      id="home"
      className="w-dvw h-dvh absolute top-0 flex justify-center items-center flex-col Page"
    >
      <img
        src={SpaceBackgroundHomePhone}
        alt="Background home"
        className="w-dvw h-dvh absolute z-10 top-0 left-0"
      />

      <section className="z-20 w-[85%] h-max mx-auto text-white text-center flex flex-col items-center justify-center overflow-hidden mb-20">
        <div className="h-max flex flex-col justify-around">
          <h3 className="text-balance text-xl uppercase tracking-widest">
            So, you want to travel to
          </h3>
          <h1 className="text-balance text-8xl uppercase font-Bellefair my-3">
            Space
          </h1>
          <p className="text-pretty text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </section>

      <div className="w-full absolute bottom-[8%]">
        <div className="h-full w-full flex justify-center items-end relative">
          <div
            id="container-explore"
            className="absolute z-10 bg-white/60 w-36 h-36 rounded-full"
          ></div>
          <button className="relative w-36 h-36 bg-white rounded-full text-black text-2xl z-20 font-Bellefair uppercase">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
