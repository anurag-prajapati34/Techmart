import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Person from "@mui/icons-material/PersonOutline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBox, faCartArrowDown,faShoppingCart ,faX } from "@fortawesome/free-solid-svg-icons";
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { CartIcon } from "../CartIcon";

import { useContext } from "react";

import { FirebaseAuthContext } from "../../contexts/FirebaseAuthContext";
import "./navBAr.css";
import MenuSideBar from "../MenuSideBar";
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
      <MenuSideBar isMenu={isMenu} handleMenuBarToggle={handleMenuBarToggle} />
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
          Home
        </NavLink>
        <NavLink
          to={"shop"}
          className={({ isActive }) =>
            `font-semibold `
          }
        >
          Store
        </NavLink>
      
        <NavLink
          className={({ isActive }) =>
            `font-semibold `
          }
          to={"about"}
        >
          About us
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold `
          }
          to={"contact-us"}
        >
          Contact us
        </NavLink>
      
      </div>
      <div className="flex  gap-4 text-lg items-center ">
        {/*nav options*/}

       
          <div className="flex gap-4 items-center justify-center">
            <CartIcon />
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
