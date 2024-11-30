import { useColorScheme } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FirebaseAuthContext } from "../../contexts/FirebaseAuthContext";
import {toast,Toaster} from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const {resetPassword, loginUserWithEmailAndPassword,logedInUser}=useContext(FirebaseAuthContext)
const navigate=useNavigate();
useEffect(()=>{
  if(logedInUser){
    navigate('/')
  }
},[logedInUser])


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-purple-600  p-10">
      <Toaster/>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        {/* Decorative Circle */}
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-blue-500 w-24 h-24 rounded-full border-4 border-white flex items-center justify-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="rounded-full"
          />
        </div>

        {/* Header */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={(e)=>{e.preventDefault(); loginUserWithEmailAndPassword(email,password)}} className="mt-8 space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500 focus:ring-0"
              />
              <span className="ml-2 text-gray-600">Remember Me</span>
            </label>
            <p
              onClick={()=>resetPassword(email)}
              className="text-blue-500 hover:underline focus:text-blue-700 cursor-pointer"
            >
              Forgot Password?
            </p>
          </div>
          <button
          
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center mt-8">
          <div className="h-px bg-gray-300 flex-grow"></div>
          <span className="text-gray-500 mx-4">USER LOGIN</span>
          <div className="h-px bg-gray-300 flex-grow"></div>
        </div>

     

        {/* Footer */}
        <p className="text-center text-gray-600 mt-8">
          Don't have an account?{" "}
          <Link to={'/signup'} className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
