import React, { useContext, useEffect, useState } from "react";



import "react-toastify/dist/ReactToastify.css";
import "../SmallImage/SmallImage";

import { formatDate } from "../../utils/formatDate";

import orderBox from '../../assets/Images/delivery.png'

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const OrderProductCard = ({ order }) => {
  const [openOrderDetails, setOpenOrderDetails] = useState(null);
  const toggleOrderDetails = (orderId) => {
    setOpenOrderDetails(openOrderDetails === orderId ? null : orderId);
  };

  const {
    products,
    product_id,

    status,
  } = order;



  const [totalPrice, setTotalPrice] = useState(0);












  useEffect(() => {

    const tPrice = products?.reduce((acc, item) => {
      return acc + parseInt(item?.product?.price);
    }, 0)

    setTotalPrice(tPrice);



  })


  return (
    <div key={order?._id} className="bg-white shadow-lg rounded-lg p-4 overflow-x-auto ">
            <div className="sm:flex justify-between items-center h-full w-full">
              <div className="flex gap-2 ">
                <img src={orderBox} className="sm:h-[100px] h-[80px]"/>
              <div className="text-start">
              <h3 className="text-xl font-semibold text-gray-700">
                  Order ID: {order?._id}
                </h3>
                <h3 className="text-xl font-semibold text-gray-700">
                  Order status: {order?.status}
                </h3>
                <p className="text-gray-500">Date: {formatDate(order?.createdAt)}</p>
                <p className="text-gray-600 font-medium">Total: {"₹"+totalPrice}</p>
                </div>
              </div>
              <button
                onClick={() => toggleOrderDetails(order?._id)}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
              >
                {openOrderDetails === order?._id ? "Hide Details" : "View Details"}
                {openOrderDetails === order?._id ? (
                  <FaChevronUp className="ml-1" />
                ) : (
                  <FaChevronDown className="ml-1" />
                )}
              </button>
            </div>
            {openOrderDetails === order?._id && (
              <div className="mt-4 border-t pt-4">
                <h4 className="text-lg font-semibold text-gray-600 mb-3">
                  Products in this Order:
                </h4>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 text-start">
                  {order?.products?.map((pr) => (
                    <div
                      key={pr?._id}
                      className="flex items-center gap-4 bg-gray-50 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img
                        src={pr?.product?.thumbnail}
                        alt={pr?.product?.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <p className="text-gray-700 font-medium">{pr?.product?.name}</p>
                        <p className="text-gray-500 text-sm">{"₹"+pr?.product?.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
  );
};

export default OrderProductCard;
