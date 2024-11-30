import React, { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { ProductContext} from '../../contexts/ProductContext'
import { ToastContainer, toast } from "react-toastify";
const ContactUs = () => {

  const {handleFeedbackSubmission}=useContext(ProductContext)
  const [formData, setFormData] = useState({
   name:"",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
   
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when input changes
  };


  const handleSubmit = () => {
 console.log("formdata:",formData)
if(formData?.name&&formData?.email&&formData?.message&&formData?.phone)
     {
      handleFeedbackSubmission(formData)
     }
     else{
      toast.error("Fill all fields")
     }
   
    
  };




  useEffect(()=>{
    window.scrollTo(0,0,)
  },[])








  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      {/* Header Section */}
      <ToastContainer/>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Get in Touch with Us
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Have any questions or need assistance? We’re here to help!
        </p>
      </div>

      {/* Contact Details */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Left Section - Contact Info */}
        <div className="space-y-6 text-start">
          <div className="flex items-center bg-white shadow-lg rounded-lg p-6 gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-3xl" />
            <div>
              <h3 className="font-semibold text-gray-700 text-xl">Our Address</h3>
              <p className="text-gray-600">Aks pateri road satna madhypradesh</p>
            </div>
          </div>
          <div className="flex items-center bg-white shadow-lg rounded-lg p-6 gap-4">
            <FaPhoneAlt className="text-green-500 text-3xl" />
            <div>
              <h3 className="font-semibold text-gray-700 text-xl">Phone Support</h3>
              <p className="text-gray-600">+1 800 123 4567</p>
              <p className="text-gray-600">Mon - Fri, 9AM - 6PM</p>
            </div>
          </div>
          <div className="flex items-center bg-white shadow-lg rounded-lg p-6 gap-4">
            <FaEnvelope className="text-red-500 text-3xl" />
            <div>
              <h3 className="font-semibold text-gray-700 text-xl">Email Us</h3>
              <p className="text-gray-600">support@techmart.com</p>
              <p className="text-gray-600">We reply within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-start">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h3>
          <form  className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-1"
              >
                Full Name
              </label>
              <input
              name="name"
          
                type="text"
                id="name"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-1"
              >
                Email Address
              </label>
              <input
                 onChange={handleChange}
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label
                htmlFor="phone"

                className="block text-gray-600 font-medium mb-1"
              >
               Phone
              </label>
              <input
              
                 onChange={handleChange}
                type="text"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-600 font-medium mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                name="message"
                
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
onClick={(e)=>{
e.preventDefault();
handleSubmit();
}}
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h3>
        <div className=" h-[300px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.9424098066424!2d80.47239147459067!3d24.59118365598119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39839fe7c8c7a831%3A0xc0ecd194c0917f69!2sAKS%20University%20SATNA!5e0!3m2!1sen!2sin!4v1732514467813!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
