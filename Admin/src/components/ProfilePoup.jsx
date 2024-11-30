import React, { useContext, useState } from "react";
import { FaUserCircle, FaSignOutAlt, FaEdit, FaShoppingBag, FaBell } from "react-icons/fa";
import { FirebaseAuthContext } from "../contexts/FirebaseAuthContext";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ProfilePopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { logedInUser,
    logOut,}=useContext(FirebaseAuthContext)

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <div className="relative">
      {/* Profile Icon */}
      <button
        className="flex items-center gap-2 text-gray-700 hover:text-blue-500"
        onClick={togglePopup}
      >
        <FaUserCircle className="text-3xl" />
        <span className="hidden sm:block">My Account</span>
      </button>

      {/* Profile Popup */}
      {isPopupOpen && (
        <div
          className="absolute right-0 mt-2  bg-white shadow-lg rounded-lg border border-gray-200 animate-fadeIn"
          style={{ zIndex: 50 }}
        >
          {/* User Info */}
          <div className="flex w-full items-center gap-3 p-4 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-t-lg">
            <div
              
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center"
            >
                <FontAwesomeIcon icon={faUser}/>
            </div>
            <div className="text-start">
              <h4 className="font-bold text-lg">{logedInUser?.displayName?logedInUser?.displayName:'No Name'}</h4>
              <p className="text-sm">{logedInUser?.email?logedInUser?.email:'No Email'}</p>
            </div>
          </div>

      

          {/* Logout */}
          <div className="p-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
            <button
            onClick={logOut}
              className="flex items-center gap-3 w-full text-red-600 font-medium py-2 px-3 rounded-lg hover:bg-red-50"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}

      {/* Overlay for closing popup */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25"
          onClick={togglePopup}
          style={{ zIndex: 40 }}
        ></div>
      )}
    </div>
  );
};

export default ProfilePopup;
