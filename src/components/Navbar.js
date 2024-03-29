import React, { useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useState } from "react";

export default function Navbar() {
  let componentIsMounted = false;
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    componentIsMounted = true;
  });


  if (scrollPosition > 1 && scrollPosition < 88) {
    document.getElementById("logo").style.height = 144 - scrollPosition + "px";
  } else if (scrollPosition > 88) {
    document.getElementById("logo").style.height = 56 + "px";
  } else if (componentIsMounted) {
    document.getElementById("logo").style.height = 144 + "px";
  }

  return (
    <div className="fixed flex flex-row w-full  bg-gray-3 shadow-xl ">
        <div className="flex-1 flex justify-center mt-auto mb-auto">

          <Link to="portfolio" smooth={true} duration={500} offset={-56} className="cursor-pointer  transition-colors duration-300 hover:text-custom-yellow text-white font-bold fo py-2 mx-5 select-none">Portfólio</Link>

          <Link to="offer" smooth={true} duration={500} className="cursor-pointer  transition-colors duration-300 hover:text-custom-yellow text-white font-bold py-2  mx-5 select-none">Cenová ponuka</Link>
        
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer  transition-colors duration-300 hover:text-custom-yellow text-white font-bold py-2  mx-5  select-none">Kontakt</Link>
        </div>
        <div className="mx-12">
          {/*logo*/}
          <img src={logo} id="logo" alt="logo" className="select-none h-36"/>
        </div>
        <div className="flex-1 flex justify-center mt-auto mb-auto">
          {/*Contact me */}
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer  transition-colors duration-300 hover:text-custom-yellow text-white font-bold py-2 px-4 text-center select-none">Filip Lachký<br/>{scrollPosition < 88 ? "3D modelovanie | 3D tlač" : ""}</Link>
        </div>
    </div>
  );
}
