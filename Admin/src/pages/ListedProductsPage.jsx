import React, { useContext, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AdminContext } from "../contexts/adminContext";

const ListedProductsPage = () => {
 

  const {listedProducts,deleteAProduct}=useContext(AdminContext);


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Electronic Products</h1>
        <p className="text-gray-600">Manage and update your product inventory with ease.</p>
      </header>

      {/* Add Product Button */}
      <div className="flex justify-end mb-6">
        <NavLink to={'/product-listing'}  className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          <FaPlus className="inline-block mr-2" /> Add New Product
        </NavLink>
      </div>

      {/* Product Table */}
      <div className="bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-left">
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listedProducts?.map((product) => (
              <tr
                key={product?._id}
                className="hover:bg-gray-100 transition-all border-b overflow-x-auto text-start"
              >
                <td className="p-3">
                  <img
                    src={product?.thumbnail}
                    alt={product?.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                </td>
                <td className="p-3 font-medium">{product?.name}</td>
                <td className="p-3">{product?.category}</td>
                <td className="p-3 text-blue-600 font-semibold">{'₹'+product?.price}</td>
               
                <td className="p-3 flex justify-center space-x-4">
                
                  <button
                    onClick={() => deleteAProduct(product?._id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <FaTrash className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600">
        <p>&copy; 2024 Admin Panel | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default ListedProductsPage;
