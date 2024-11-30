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
      <div onClick={handleMenuBarToggle} className="flex-1 h-full"></div>
      <div className="w-1/2 max-w-[500px] h-full bg-[var(--primary-color)] flex flex-col  gap-4 text-lg  py-10 items-start px-5 text-white">
        <div
          onClick={handleMenuBarToggle}
          className="flex justify-center items-center h-[40px] w-[40px] rounded-full cursor-pointer mb-10  text-black"
        >
          <FontAwesomeIcon icon={faX} />
        </div>
        <NavLink
          to={"/"}
          className="font-semibold transition-all "
        >
          Add product
        </NavLink>
        <NavLink
          to={"/listedProducts"}
          className="font-semibold  transition-all"
        >
          Products
        </NavLink>
        <NavLink
          to={"/orders"}
          className="font-semibold  transition-all"
        >
          Orders
        </NavLink>

       
      
      </div>
    </div>
  );
};

export default MenuSideBar;
