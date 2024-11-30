import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const MenuSideBar = ({ isMenu, handleMenuBarToggle }) => {
  return (
    <div
      className={`fixed right-0 top-0 flex  w-full  h-full z-50 ${
        isMenu ? "visible" : "hidden"
      }`}
    >
      <div className="w-1/2 h-full"></div>
      <div className="w-1/2  h-full bg-[var(--primary-color)] flex flex-col  gap-4 text-lg  py-10 items-start px-5 text-white">
        <div
          onClick={handleMenuBarToggle}
          className="flex justify-center items-center h-[40px] w-[40px] rounded-full cursor-pointer mb-10 bg-white text-black"
        >
          <FontAwesomeIcon icon={faX} />
        </div>
        <NavLink
          to={"/"}
          className="font-semibold  transition-all "
        >
          Home
        </NavLink>
        <NavLink
          to={"shop"}
          className="font-semibold  transition-all"
        >
          Shop
        </NavLink>
   

        <NavLink
          className="font-semibold   transition-all"
          to={"contact-us"}
        >
          Contact us
        </NavLink>
        <NavLink
          className="font-semibold   transition-all"
          to={"about"}
        >
          About us
        </NavLink>
      </div>
    </div>
  );
};

export default MenuSideBar;
