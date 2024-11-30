import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

export const ProductMainImage = ({ inputChange, fieldName }) => {
  const [selectedImage, setSelectedImage] = useState();

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
    inputChange(e); // Trigger the parent's input change handler
  };

  return (
    <div className="max-w-[500px] min-h-[300px] max-h-[500px] border-2 border-dashed border-gray-400 hover:border-blue-500 bg-gray-100 flex justify-center items-center relative rounded-md shadow-lg overflow-hidden transition-all duration-300 cursor-pointer">
      <input
        name={fieldName}
        onChange={handleImageChange}
        className="absolute h-full w-full opacity-0 z-40"
        type="file"
      />

      {selectedImage ? (
        <img
          className="h-full w-full object-cover rounded-md"
          src={URL.createObjectURL(selectedImage)}
          alt="selected"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-500">
          <FaPlus size={40} className="mb-2" />
          <h1 className="text-lg font-medium">Click to Upload Image</h1>
          <p className="text-sm text-gray-400">Maximum size: 500x500px</p>
        </div>
      )}
    </div>
  );
};
