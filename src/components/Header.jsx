import React, { useState } from "react";
import { navigation } from "../constants";
import Button from "../components/Button";
import { useLocation } from "react-router-dom";
import BurgerSvg from "./design/BurgerSvg";

const Header = () => {
  const pathName = useLocation();
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    if (openNav) {
      setOpenNav(false);
    } else {
      setOpenNav(true);
    }
  };
  const handleClick = () => {
    return null;
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 shadow-md border-n-6 lg:black py-4
    lg:backdrop-blur-sm ${
      openNav ? "bg-slate-600" : "bg-black/20 backdrop-blur-sm"
    }`}
    >
      <div className="flex items-center px-5 lg:px-7 5 xl:px-10 max-lg:py-4">
        {/* <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a> */}
        <nav
          className={`${
            openNav ? "flex text-white" : "hidden"
          } fixed top-0 left-0 right-0 bottom-0 bg-yellow-600 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                onClick={handleClick}
                key={item.id}
                href={item.url}
                className={`block relative font-semibold text-white uppercase transition-colors hover:text-blue-900
                px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold  
                ${
                  item.url === pathName.hash
                    ? "z-2 lg:text-blue-900"
                    : "lg:text-white"
                } lg:leading-5 lg:hover:text-n-1 xl:px-10 lg:text-sm`}
              >
                {item.title}
              </a>
            ))}
          </div>
          {/* <HamburgerMenu /> */}
        </nav>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNav}>
          <BurgerSvg openNav={openNav} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
