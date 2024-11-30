import React from 'react';
import heroVid from '../assets/videos/watchShowcaseVideo.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faHeadset, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom'
const HeroSection = () => {
  const navigate=useNavigate()
  return (
    <div className="relative min-h-[80vh] w-full rounded-xl flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={heroVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/80"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-white text-center px-4 md:px-8">
        <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
          Discover the Future of Technology
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Experience cutting-edge gadgets and innovations that redefine your digital lifestyle.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button onClick={()=>navigate('/shop')} className="bg-[var(--primary-color)] hover:bg-[var(--btn-hover-color)] text-white py-3 px-6 rounded-lg font-medium text-lg shadow-lg transition duration-300">
            Explore Products
          </button>
          <button onClick={()=>navigate('/about')} className="bg-transparent border border-white hover:bg-white hover:text-black text-white py-3 px-6 rounded-lg font-medium text-lg shadow-lg transition duration-300">
           Know us
          </button>
        </div>

        {/* Additional Highlights */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
          <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faShippingFast}/>
            <p className="mt-2 text-sm">Fast & Secure Shipping</p>
          </div>
          <div className="flex flex-col items-center">
           <FontAwesomeIcon icon={faGem}/>
            <p className="mt-2 text-sm">Top-notch Quality</p>
          </div>
          <div className="flex flex-col items-center">
           <FontAwesomeIcon icon={faHeadset}/>
            <p className="mt-2 text-sm">24/7 Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
