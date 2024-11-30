import React, { useContext, useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { FirebaseAuthContext } from "../../contexts/FirebaseAuthContext";
import {toast,Toaster} from 'react-hot-toast';

const SignUpPage = () => {


  const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confirmPassword,setConfirmPassword]=useState('');
const [name,setName]=useState('');
const {  registerUserWithEmailAndPassword,logedInUser}=useContext(FirebaseAuthContext)
const navigate=useNavigate();
const handleSignupFormSubmit=(e)=>{
  e.preventDefault();
  if(email&&password&&confirmPassword&&name){


   

    if(password===confirmPassword){
      registerUserWithEmailAndPassword(email,password,name);
    }
    else{
      toast.error("please confirm your password")
    }
  }else{
    toast.error("plese fill all input fields")
  }
}
useEffect(()=>{
  if(logedInUser){
    navigate('/')
  }
},[logedInUser])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-blue-600 p-10">
      <Toaster/>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md  w-full relative">
        {/* Decorative Circle */}
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-purple-500 w-24 h-24 rounded-full border-4 border-white flex items-center justify-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="rounded-full"
          />
        </div>

        {/* Header */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-800">Join Us Today!</h2>
          <p className="text-gray-500 mt-2">
            Create an account to explore amazing electronics.
          </p>
        </div>

        {/* Sign-Up Form */}
        <form onSubmit={handleSignupFormSubmit} className="mt-8 space-y-5">
          <div className="relative">
            <FaUser className="absolute left-4 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e)=>setName(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Create a password"
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm your password"
              onChange={(e)=>setConfirmPassword(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center mt-8">
          <div className="h-px bg-gray-300 flex-grow"></div>
          <span className="text-gray-500 mx-4">USER SIGNUP</span>
          <div className="h-px bg-gray-300 flex-grow"></div>
        </div>


        {/* Footer */}
        <p className="text-center text-gray-600 mt-8">
          Already have an account?{" "}
          <NavLink to="/login" className="text-purple-500 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
