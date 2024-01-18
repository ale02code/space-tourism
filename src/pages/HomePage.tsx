import React from "react";
import SpaceHomePhone from "../assets/home/background-home-mobile.jpg";

function HomePage() {
  return (
    <div className="w-dvw h-dvh absolute top-0 flex justify-center items-center flex-col">
      <img
        src={SpaceHomePhone}
        alt="Space"
        className="w-dvw h-dvh absolute z-10 top-0 left-0"
      />

      <section className="z-20 w-[85%] h-[80%] mx-auto text-white text-center flex flex-col items-center justify-center overflow-hidden gap-8">
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

        <div className="flex justify-center items-center w-full h-60 relative">
          <div id="container-explore" className="w-40 h-40 rounded-full bg-white/60 absolute"></div>
          <button className="relative w-40 h-40 bg-white rounded-full text-black text-2xl z-10 font-Bellefair uppercase">
            Explore
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
