import React, { useContext, useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

import { FirebaseAuthContext } from "../contexts/FirebaseAuthContext";

import OrderProductCard from "../components/OrderProductCard/OrderProductCard";
import noOrderImage from '../assets/Images/no-order.png'
const UserOrder = () => {
  















  const { logedInUser } = useContext(FirebaseAuthContext);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const SERVER_URL=import.meta.env.VITE_SERVER_URL;

  const fethcUserOrders = () => {
    setLoading(true);

    try {
      fetch(
        `${SERVER_URL}/userOrders?userAuthId=${logedInUser.uid}`
      ).then(async (response) => {
        if (response.ok) {
          const responseData = await response.json();
          
          setOrders(responseData.orders);
        } 
        setLoading(false);
      });
    } catch (err) {
      
    }
  };

  useEffect(() => {
    if (logedInUser) {
      fethcUserOrders();
    }
  }, [logedInUser]);

 


  useEffect(()=>{
    window.scrollTo(0,0,)
  },[])

























  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        Your Orders <FaShoppingBag className="inline-block ml-2 text-green-500" />
      </h2>
      <div className="max-w-5xl mx-auto space-y-6">
        {orders?.length>0?orders.map((order) => (
          <OrderProductCard order={order}/>
        )):<div className='flex items-center justify-center  h-screen'>
        <img className="max-h-[200px]" src={noOrderImage}/>
        </div>}
      </div>
    </div>
  );
};

export default UserOrder;
