import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Your go-to destination for the latest in electronics. We offer high-quality products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><NavLink to={'/'} className="hover:text-blue-500">Home</NavLink></li>
              <li><NavLink to='/shop' className="hover:text-blue-500">Shop</NavLink></li>
              <li><NavLink to='/about'className="hover:text-blue-500">About </NavLink></li>
              <li><NavLink to='/contact-us'className="hover:text-blue-500">Contact</NavLink></li>
             
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Aks pateri road satna madhypradesh</p>
            <p className="text-gray-400">City, Country</p>
            <p className="text-gray-400">Phone: +1 800 123 4567</p>
            <p className="text-gray-400">Email: support@techmart.com</p>
          </div>

          {/* Social Media */}
          <div className="text-start">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 ">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col items-center sm:flex-row justify-between">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Techmart. All Rights Reserved.
              </p>
            </div>
            <div className="text-center sm:text-right mt-4 sm:mt-0">
              <ul className="flex space-x-6 justify-center sm:justify-end">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
