import React, { useEffect } from "react";
import { FaAward, FaUsers, FaBox, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {



  useEffect(()=>{
    window.scrollTo(0,0,)
  },[])
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800">
          Who We Are
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Empowering Your Tech Experience with Innovative Solutions
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              At **Techmart**, our mission is to deliver high-quality and cutting-edge 
              electronics that empower individuals and businesses alike. We believe in 
              making technology accessible to everyone.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To become a global leader in the electronics market by offering 
              innovative products and outstanding customer service.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/18105/pexels-photo.jpg"
            alt="Our Vision"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          What Sets Us Apart
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center space-y-4">
            <FaAward className="text-blue-500 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">10+ Awards</h3>
            <p className="text-gray-600">Recognized for innovation and quality.</p>
          </div>
          <div className="text-center space-y-4">
            <FaUsers className="text-green-500 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">1M+ Customers</h3>
            <p className="text-gray-600">Trusted by customers worldwide.</p>
          </div>
          <div className="text-center space-y-4">
            <FaBox className="text-orange-500 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">5K+ Products</h3>
            <p className="text-gray-600">A wide range of cutting-edge electronics.</p>
          </div>
          <div className="text-center space-y-4">
            <FaLightbulb className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">Innovative</h3>
            <p className="text-gray-600">Driven by creativity and technology.</p>
          </div>
        </div>
      </div>

      {/* About Story Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
            alt="Our Story"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Journey
          </h2>
          <p className="text-gray-600">
            Established in 2010, Techmart started as a small family-owned 
            business with a passion for technology. Over the years, we’ve grown 
            into a leading electronics retailer known for our innovative solutions 
            and exceptional service.
          </p>
          <p className="text-gray-600">
            From partnering with industry leaders to introducing eco-friendly 
            products, we are committed to making a difference in the tech world.
          </p>
        </div>
      </div>

   
    </div>
  );
};

export default AboutUs;
