import React, { useContext, useState } from "react";

import { AdminContext } from "../contexts/adminContext";

import OrderProductCard from "../components/OrderProductCard/OrderProductCard";
const AllOrdersPage = () => {

    const {orders}=useContext(AdminContext)





  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">All Orders</h1>
        <p className="text-gray-600">
          Manage your orders, update statuses, and view details.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => (
          <OrderProductCard key={order?._id} order={order}/>
        ))}
      </div>

 

      <footer className="mt-10 text-center text-gray-600 text-sm">
        <p>&copy; 2024 Admin Panel | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default AllOrdersPage;
