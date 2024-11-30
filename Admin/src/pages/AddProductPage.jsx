import React, { useState } from "react";
import { ProductExtraIamge } from "../components/ProductExtraIamge";

import { toast,Toaster } from "react-hot-toast";

import CustomCheckbox from "../components/CustomCheckBox";

import { ProductMainImage } from "../components/ProductMainImage";
import { FaImage, FaTags, FaDollarSign, FaClipboardList, FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";

export const AddProductPage = () => {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const [thumbnail, setThumbnail] = useState();
  const [extraImages, setExtraImages] = useState({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const [category, setCategory] = useState('');

  const [fullDescription, setFullDescription] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);

  const [brand, setBrand] = useState("");

  const handleThumbnailChange = (e) => {
    const image = e.target.files[0];
    setThumbnail(image);
  };
  const handleExtraImagesChange = (e) => {
    const image = e.target.files[0];
    const fieldName = e.target.name;
    setExtraImages({ ...extraImages, [fieldName]: image });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !fullDescription || !category  || !thumbnail || !brand) {
      toast.error("Please fill all input fields");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("fullDescription", fullDescription);
    formData.append("isFeatured", isFeatured);
  
    formData.append("thumbnail", thumbnail);
    formData.append("category", category);

    formData.append("brand", brand);
    for (const key in extraImages) {
      if (extraImages[key]) {
        formData.append("extraImages", extraImages[key]);
      }
    }
    const id=toast.loading("Adding...");

    fetch(`${SERVER_URL}/upload`, {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        if (response.ok) {
          const responeData = await response.json();
        
          toast.success("Proudct listed ",{id:id})
        } else {
        
          toast.error("Unexpected error",{id:id})
        }
      })
      .catch((err) => {
       
       toast.error("Unexpected error",{id:id})
      });
  };
useEffect(()=>console.log(category),[category])
  return (
    <div className="w-full max-w-[1280px] sm:px-4 px-2 m-auto ">
      <Toaster/>
      <form
        onSubmit={handleFormSubmit}
        className="py-6 px-10 text-start gap-6 bg-white rounded-lg"
      >
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          <FaClipboardList className="inline-block mr-2 text-blue-500" />
          Add New Product
        </h1>
        <div className="flex flex-col gap-6">
          {/* Thumbnail Upload */}
          <div className="w-full sm:w-1/3">
           
            <ProductMainImage inputChange={handleThumbnailChange} fieldName={"thumbnail"} />
          </div>
          {/* Extra Images */}
          <div className="flex-grow">
            {/* <h2 className="text-lg font-medium text-gray-600">Extra Images</h2> */}
            <div className=" flex gap-4">
              {["e1", "e2", "e3", "e4"].map((fieldName, index) => (
                <ProductExtraIamge key={index} inputChange={handleExtraImagesChange} fieldName={fieldName} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {/* Product Name */}
          <div>
            <label className="block text-gray-600 mb-2 font-medium">Product Name</label>
            <div className="flex items-center border rounded-md px-2 py-1 bg-gray-50 shadow-inner">
              <FaTags className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter product name"
                onChange={(e) => setName(e.target.value)}
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>
          {/* Product Price */}
          <div>
            <label className="block text-gray-600 mb-2 font-medium">Product Price</label>
            <div className="flex items-center border rounded-md px-2 py-1 bg-gray-50 shadow-inner">
              <FaDollarSign className="text-gray-400 mr-2" />
              <input
                type="number"
                placeholder="Enter product price"
                onChange={(e) => setPrice(e.target.value)}
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Category, Subcategory, Brand */}
        <div className="grid sm:grid-cols-3 gap-6 mt-6">
          {/* Category */}
          <div>
            <label className="block text-gray-600 mb-2 font-medium">Category</label>
            <select
              className="w-full border rounded-md px-2 py-2 bg-gray-50 shadow-inner"
              defaultValue={category}
              onChange={(e) => setCategory(e.target.value)}
            >
             <option>Smartphone</option>
              <option>Smartwatch</option>
              <option>Headphone</option>
              <option>Tab</option>
              <option>TV</option>
              <option>Computer</option>
              <option>AC</option>
              <option>Refrigerator</option>
              
            </select>
          </div>
          {/* Subcategory */}
          {/* <div>
            <label className="block text-gray-600 mb-2 font-medium">Subcategory</label>
            <select
              className="w-full border rounded-md px-2 py-2 bg-gray-50 shadow-inner"
              onChange={(e) => setSubCategory(e.target.value)}
            >
              <option>Smartphones</option>
              <option>Smartwatches</option>
              <option>Headphones</option>
              <option>Tabs</option>
              <option>Sneakers</option>
            </select>
          </div> */}
          {/* Brand */}
          <div>
            <label className="block text-gray-600 mb-2 font-medium">Brand</label>
            <input
              type="text"
              className="w-full border rounded-md px-2 py-2 bg-gray-50 shadow-inner"
              placeholder="Enter brand name"
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>

  

        {/* Description */}
        <div className="mt-6">
          <label className="block text-gray-600 mb-2 font-medium">Description</label>
          <textarea
            className="w-full border rounded-md px-2 py-2 bg-gray-50 shadow-inner"
            placeholder="Enter product description"
            onChange={(e) => setFullDescription(e.target.value)}
          />
        </div>

        {/* Featured Checkbox */}
        <div className="mt-6">
          <CustomCheckbox setIsFeatured={setIsFeatured} />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 mt-6 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          <FaCheckCircle className="inline-block mr-2" />
          Add Product
        </button>
      </form>

     
    </div>
  );
};
