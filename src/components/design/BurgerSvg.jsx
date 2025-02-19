import React from "react";

const HamburgerButton = ({ openNav }) => {
  const classNames =
    "w-8 h-[4px] bg-white rounded-full transition-transform duration-300 shadow";

  return (
    <>
      <div className="flex flex-col gap-1">
        <div
          className={`top-bun ${classNames} ${
            openNav ? "-rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`patty ${classNames} ${openNav ? "translate-x-14" : "block"}`}
        ></div>
        <div
          className={`bottom-bun ${classNames}  ${
            openNav ? "rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>
    </>
  );
};

export default HamburgerButton;
