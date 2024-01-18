import React from "react";
import logoMainHeader from "../assets/shared/logo.svg";

function Header() {
  const handleMenu = () => {
    const nav = document.getElementById("nav");
    const checkMenu = nav?.classList.contains("-translate-y-full");
    checkMenu
      ? nav?.classList.replace("-translate-y-full", "translate-y-0")
      : nav?.classList.replace("translate-y-0", "-translate-y-full");
  };

  return (
    <header className="w-screen m-auto h-24 flex items-center justify-between px-[10%] z-50 relative">
      <img src={logoMainHeader} alt="icon-main" className="h-4/6" />
      <i
        className="fa-solid fa-caret-down text-5xl text-white"
        onClick={handleMenu}
      ></i>
      <nav
        id="nav"
        className="h-dvh w-dvw bg-black absolute right-0 top-0 -translate-y-full transition-transform duration-500"
      >
        <ul className="text-white h-full mx-auto flex flex-col justify-center items-center text-3xl gap-4">
          <i
            className="fa-solid fa-xmark absolute right-7 top-8 text-5xl"
            onClick={handleMenu}
          ></i>

          <li className="hover:cursor-pointer hover:text-gray-300">
            <strong>00</strong> Home
          </li>
          <li className="hover:cursor-pointer hover:text-gray-300">
            <strong>01</strong> Destination
          </li>
          <li className="hover:cursor-pointer hover:text-gray-300">
            <strong>02</strong> Crew
          </li>
          <li className="hover:cursor-pointer hover:text-gray-300">
            <strong>03</strong> Technology
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
