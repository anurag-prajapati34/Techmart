import React, { useContext, useEffect, useState } from "react";
import { FaPaypal, FaGooglePay, FaCreditCard, FaApplePay, FaMoneyBill } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { FirebaseAuthContext } from "../contexts/FirebaseAuthContext";
import { Paper } from "@mui/material";

const BuyPage = () => {
    const [shippingInfo, setShippingInfo] = useState({
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    });

    const [selectedPayment, setSelectedPayment] = useState("creditCard");

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({ ...shippingInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order Placed Successfully!");
    };
///////////////////////



useEffect(()=>{
    window.scrollTo(0,0,)
  },[])


const [paymentMethod, setPaymentMethod] = useState("COD");
const { products,subtotalPrice,shippingFees} = useLocation().state;
const { logedInUser } = useContext(FirebaseAuthContext);
const SERVER_URL=import.meta.env.VITE_SERVER_URL;
console.log("total ordered product form order page:",products)
//store form data
const [formData, setFormData] = useState({
  name: "",
  address: "",

  city: "",
country:'',
  zip: "",
  phone:'',
  paymentMethod: "", // default to card
  
});




// Handle form input changes
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
// Handle form submission (validation and sending data to backend)
const handlePlaceOrder = () => {
  // Check if all fields are filled
  console.log("formdat :", formData);
  const {
    name,
    address,
    city,
    phone,

    zip,
   
  } = formData;

  if (
    name ||
    address ||
    city ||phone||

    zip 
   
  ) {
    try {
      fetch(`${SERVER_URL}/placeOrder`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          userAuthId: logedInUser.uid,
          shipingInfo: {...formData,paymentMethod},
          products: products,
          status: "Not delivered",
        }),
      })
        .then(async (response) => {
          if (response.ok) {
            const responseData = await response.json();
            console.log("response data after placing order:", responseData);
            toast.success("Order placed successfully");
          } else {
            toast.error("Error placing order");
          }
        })
        .catch((err) => {
          console.log("error placeorder:", err);
        });
    } catch (error) {
      toast.error("Unexpected error !");
    }
  } else {
    toast.error("Please fill all the fields");
  }
};












    return (
        <div className="min-h-screen bg-gray-100 py-16">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Secure Your Order
                </h1>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Section: Order Details */}
                    <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
                        {/* Shipping Information */}
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Information</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input

                                    type="text"
                                    name="name"
                                    value={formData?.name}
                                    onChange={handleInputChange}
                                    placeholder="Full Name"
                                    className="px-4 py-1 border rounded-lg"
                                    required
                                />
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="Address"
                                    className="px-4 py-1 border rounded-lg"
                                    required
                                />
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder="City"
                                    className="px-4 py-1 border rounded-lg"
                                    required
                                />
                                <input
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleInputChange}
                                    placeholder="Postal Code"
                                    className="px-4 py-1 border rounded-lg"
                                    required
                                />
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    placeholder="Country"
                                    className="px-4 py-1 border rounded-lg"
                                    required
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone"
                                    className="px-4 py-1 border rounded-lg"
                                    required
                                />
                            </div>

                            {/* Payment Information */}
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h2>
                                <div className="flex flex-col gap-4">
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="creditCard"
                                            checked={paymentMethod === "creditCard"}
                                            onChange={() => setPaymentMethod("creditCard")}
                                            className="form-radio text-green-600"
                                        />
                                        <FaCreditCard className="text-xl text-gray-600" />
                                        <span>Credit / Debit Card</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="COD"
                                            checked={paymentMethod === "COD"}
                                            onChange={() => setPaymentMethod("COD")}
                                            className="form-radio text-green-600"
                                        />
                                        <FaMoneyBill className="text-xl text-gray-600" />
                                        <span>Cash On Delivery</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="paypal"
                                            checked={paymentMethod === "paypal"}
                                            onChange={() => setPaymentMethod("paypal")}
                                            className="form-radio text-green-600"
                                        />
                                        <FaPaypal className="text-xl text-gray-600" />
                                        <span>PayPal</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="googlePay"
                                            checked={paymentMethod === "googlePay"}
                                            onChange={() => setPaymentMethod("googlePay")}
                                            className="form-radio text-green-600"
                                        />
                                        <FaGooglePay className="text-xl text-gray-600" />
                                        <span>Google Pay</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="applePay"
                                            checked={paymentMethod === "applePay"}
                                            onChange={() => setPaymentMethod("applePay")}
                                            className="form-radio text-green-600"
                                        />
                                        <FaApplePay className="text-xl text-gray-600" />
                                        <span>Apple Pay</span>
                                    </label>
                                </div>
                            </div>

                            <button
                            onClick={()=>handlePlaceOrder()}
                                type="submit"
                                className="bg-green-600 text-white py-3 px-8 rounded-lg w-full sm:w-auto hover:bg-green-700 transition"
                            >
                                Confirm Order
                            </button>
                        </form>
                    </div>

                    {/* Right Section: Order Summary */}
                    <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                        <div className="flex justify-between">
                                <span className="text-gray-600">items:</span>
                                <span>{products?.length}</span>
                            </div>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span>₹{subtotalPrice}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Shipping</span>
                                <span>₹{shippingFees}</span>
                            </div>
                            
                            <div className="flex justify-between font-semibold text-gray-800">
                                <span>Total</span>
                                <span>₹{subtotalPrice+shippingFees}</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Need Help?</h3>
                            <p className="text-gray-600">Call us at 1-800-123-4567 for assistance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyPage;
