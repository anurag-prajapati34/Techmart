import React, { useContext, useEffect, useState } from "react";

// import { ProductContext } from "../../contexts/ProductContext";


// import { faX } from "@fortawesome/free-solid-svg-icons";

import "react-toastify/dist/ReactToastify.css";

import "./OrderProductCard.css";

import { useNavigate } from "react-router-dom";
import orderBox from '../../assets/Images/orderBox.png'

import { FaBoxOpen, FaInfoCircle, FaSave } from "react-icons/fa";

import { formatDate } from '../../utils/formatDate'


import { AdminContext } from "../../contexts/AdminContext";

const OrderProductCard = ({ order }) => {

  const [orderStatus, setOrderStatus] = useState(order?.status);
  const { updateOrderStatus } = useContext(AdminContext);
  const navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState(0);



  const statuses = ["Pending", "Shipped", "Delivered", "Canceled"];
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [viewType, setViewType] = useState("");


  const openModal = (order, type) => {
    setSelectedOrder(order);
    setViewType(type);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setViewType("");
  };





  useEffect(() => {

    const tPrice = order?.products?.reduce((acc, item) => {
      return acc + parseInt(item?.product?.price);
    }, 0)

    setTotalPrice(tPrice);



  }, [order])


  return (
    <>
      <div
        key={order?._id}
        className="bg-white shadow-lg rounded-lg p-6 border-t-4 transition-transform hover:scale-105 duration-300"
      >
        <div className="flex items-center mb-4">
          <div

            className="h-12 w-12 rounded-full shadow-md mr-4 flex font-bold items-center justify-center"
          >{order?.shipingInfo?.name[0]}</div>
          <div>
            <h2 className="text-lg font-semibold">{order?.shipingInfo?.name}</h2>
            <p className="text-sm text-gray-600">
              {formatDate(order?.createdAt)} | {order?.products?.length} items
            </p>
          </div>
        </div>

        <div className="text-sm text-gray-700 mb-4 flex justify-between items-center">

          <p className="flex items-center">
            <strong>Status:</strong>
            <span
              className={`ml-2 px-3 py-1 text-sm font-semibold rounded-full ${order?.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : order?.status === "Shipped"
                    ? "bg-blue-100 text-blue-700"
                    : order?.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                }`}
            >
              {order?.status}
            </span>
          </p>
          <p>
            <strong>Total:</strong> {'₹' + totalPrice}
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor={`status-${order?._id}`}
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Update Status
          </label>
          <select
            id={`status-${order?.id}`}
            onChange={(e) => setOrderStatus(e.target.value)}

            className="w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between space-x-2">
          <button
            className="flex items-center bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-lg transition"
            onClick={() => openModal(order, "items")}
          >
            <FaBoxOpen className="mr-2" /> View Items
          </button>
          <button
            className="flex items-center bg-green-100 hover:bg-green-200 text-green-600 px-4 py-2 rounded-lg transition"
            onClick={() => openModal(order, "shipping")}
          >
            <FaInfoCircle className="mr-2" /> Shipping Details
          </button>
        </div>

        <button
          className="flex items-center justify-center mt-4 w-full bg-green-600 text-white hover:bg-green-700 transition px-4 py-2 rounded-lg shadow-lg"
          onClick={() => updateOrderStatus(order?._id, orderStatus)}
        >
          <FaSave className="mr-2" />
          Save Changes
        </button>
      </div>
      {/* Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6  max-w-[90%] overflow-x-auto shadow-lg relative animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-600"
            >
              ✕
            </button>
            {viewType === "items" && (
              <>
                <h2 className="text-xl font-bold mb-4">
                  Order Items for {selectedOrder?.shipingInfo?.name}
                </h2>
                <ul className="space-y-2 overflow-x-auto w-full ">
                  {selectedOrder?.products?.map((item, index) => (
                    <li
                      key={index}
                      className="flex w-full justify-between gap-4 items-center bg-gray-100 p-2 rounded"
                    >
                      <span>{item?.product?.name}</span>
                      <span>{item?.product?._id}</span>

                      <span className="text-gray-600">
                        {item?.quantityToBuy} x {item?.product?.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {viewType === "shipping" && (
              <>
                <h2 className="text-xl font-bold mb-4">
                  Shipping Details for {selectedOrder?.shipingInfo?.name}
                </h2>
                <p className="text-gray-600">{selectedOrder?.shipingInfo?.address + "," + selectedOrder?.shipingInfo?.city + "," + selectedOrder?.shipingInfo?.country}</p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OrderProductCard;
