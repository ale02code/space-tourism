import React from "react";
import logoMainHeader from "../assets/shared/logo.svg";

function Header() {
  return (
    <header className="w-screen m-auto h-24 flex items-center justify-between px-[10%] relative">
      <img src={logoMainHeader} alt="icon-main" className="h-4/6" />
      <nav className="h-4/6 w-1/2 bg-black absolute right-0">
        <ul className="h-full w-full text-white uppercase flex justify-around items-center">
          <li>
            <strong>00</strong> Home
          </li>
          <li>
            <strong>01</strong> Destination
          </li>
          <li>
            <strong>02</strong> Crew
          </li>
          <li>
            <strong>03</strong> Technology
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
