import React from "react";
import { useContext } from "react";
import { FaBox, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";
import {AddProductPage} from '../pages/AddProductPage'
import { AdminContext } from '../contexts/AdminContext'
const Dashboard = () => {

   const {orders, listedProducts,users} =useContext(AdminContext)
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
<div>
        {/* Header */}
        <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your platform.</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Total Products */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow">
          <FaBox className="text-blue-600 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold">Total Products</h2>
            <p className="text-gray-600 text-2xl font-bold">{listedProducts?.length}</p>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow">
          <FaShoppingCart className="text-green-600 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-gray-600 text-2xl font-bold">{orders?.length}</p>
          </div>
        </div>

        {/* Total Customers */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow">
          <FaUsers className="text-yellow-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold">Total Customers</h2>
            <p className="text-gray-600 text-2xl font-bold">{users?.length}</p>
          </div>
        </div>

      
      </div>

     
</div>
<AddProductPage/>
      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600">
        <p>&copy; 2024 Admin Dashboard | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Dashboard;
 