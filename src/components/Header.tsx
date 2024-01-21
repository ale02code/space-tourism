import React, { useEffect, useContext } from "react";
import logoMainHeader from "../assets/shared/logo.svg";
import { NavigationContext } from "../context/NavigationContext";
import HomePage from "pages/HomePage";

function Header() {
  const { currentPage, setCurrentPage } = useContext(NavigationContext);

  const changeClassToVisibility = () => {
    const nav = document.getElementById("nav");
    const checkMenu = nav?.classList.contains("-translate-y-full");
    checkMenu
      ? nav?.classList.replace("-translate-y-full", "translate-y-0")
      : nav?.classList.replace("translate-y-0", "-translate-y-full");
  };

  useEffect(() => {
    const openMenu = document.getElementById("open-menu");

    openMenu?.addEventListener("click", () => {
      openMenu.style.animation = "rotate .5s forwards";
    });

    openMenu?.addEventListener("animationend", () => {
      openMenu.style.animation = "none";
    });
  }, []);

  const handleMenu = () => {
    setTimeout(() => {
      changeClassToVisibility();
    }, 500);
  };

  const underLine: string = `after:content-[''] after:block after:h-1 after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full`;

  return (
    <header className="w-screen m-auto h-24 flex items-center justify-between px-[10%] z-50 relative">
      <img src={logoMainHeader} alt="icon-main" className="h-4/6" />
      <i
        id="open-menu"
        className="fa-solid fa-caret-down text-5xl text-white hover:cursor-pointer hover:text-gray-300"
        onClick={handleMenu}
      ></i>
      <nav
        id="nav"
        className="h-dvh w-dvw bg-black absolute right-0 top-0 -translate-y-full transition-transform duration-500"
      >
        <ul className="text-white h-full mx-auto flex flex-col justify-center items-center text-3xl gap-4">
          <i
            className="fa-solid fa-xmark absolute right-[10%] top-8 text-5xl hover:cursor-pointer hover:text-gray-300"
            onClick={handleMenu}
          ></i>

          <li
            className={`hover:cursor-pointer hover:text-gray-300 ${underLine}`}
          >
            <strong>00</strong> Home
          </li>
          <li
            className={`hover:cursor-pointer hover:text-gray-300 ${underLine}`}
          >
            <strong>01</strong> Destination
          </li>
          <li
            className={`hover:cursor-pointer hover:text-gray-300 ${underLine}`}
          >
            <strong>02</strong> Crew
          </li>
          <li
            className={`hover:cursor-pointer hover:text-gray-300 ${underLine}`}
          >
            <strong>03</strong> Technology
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
