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

      <section className="relative z-20 w-[85%] h-3/4 mx-auto text-white text-center flex flex-col items-center justify-end">
        <div className="h-[55%] flex flex-col justify-around">
          <h3 className="text-balance text-xl uppercase">
            So, you want to travel to
          </h3>
          <h1 className="text-balance text-6xl uppercase">Space</h1>
          <p className="text-pretty text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button className="w-36 h-36 bg-white rounded-full mt-6 text-black text-2xl">
          Explore
        </button>
      </section>
    </div>
  );
}

export default HomePage;
