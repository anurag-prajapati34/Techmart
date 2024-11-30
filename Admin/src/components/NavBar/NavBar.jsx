import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBox, faCartArrowDown,faShoppingCart ,faX } from "@fortawesome/free-solid-svg-icons";


import { useContext } from "react";

import { FirebaseAuthContext } from "../../contexts/FirebaseAuthContext";
import "./navBAr.css";

import ProfilePopup from "../ProfilePoup";

export const NavBar = () => {
  const { logedInUser, logOut } = useContext(FirebaseAuthContext);
  const [isProfilePopup, setIsProfilePopup] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenuBarToggle = () => {
    if (isMenu) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  };

  return (
 <div className="w-full relative ">
     <div className="flex  justify-between items-center max-w-[1280px] w-full m-auto text-black  py-1 sm:px-4 px-2">
     
      <NavLink
        to={"/"}
        
        className={` font-bold  text-xl cursor-pointer h-[40px] flex items-center justify-center rounded-full px-4 font-sans bg-[var(--primary-color)] text-white`}
      >
        Techmart
      </NavLink>
      <div className="flex nav-options sm:gap-10 gap-4 text-base items-center justify-between ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold  `
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/listed-products"}
          className={({ isActive }) =>
            `font-semibold  `
          }
        >
          List products
        </NavLink>
        <NavLink
          to={"/orders"}
          className={({ isActive }) =>
            `font-semibold  `
          }
        >
          Orders
        </NavLink>
      
      </div>
      <div className="flex  gap-4 text-lg items-center ">
        {/*nav options*/}

       
          <div className="flex gap-4 items-center justify-center">
          
            {logedInUser ? (
              
                // <FontAwesomeIcon icon={faUser}
                //   onClick={() =>
                //     isProfilePopup
                //       ? setIsProfilePopup(false)
                //       : setIsProfilePopup(true)
                //   }
                  
                // >
                 
                // </FontAwesomeIcon>
                <ProfilePopup/>
                
            
            ) : (
              <button
              onClick={() => navigate("/login")}
              className=" border-2 px-4 h-full rounded-full border-[var(--primary-color)] text-black"
            >
              Sign in
            </button>
            )}
            <FontAwesomeIcon
              icon={faBars}
              className="cursor-pointer menu-bar-icon sm:hidden"
              onClick={handleMenuBarToggle}
            />
          </div>
       
      </div>



      {/*profile popup */}
   
    </div>

 
 </div>
  );
};
