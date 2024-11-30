import React, { useState } from 'react';
import { FaImage } from 'react-icons/fa';

export const ProductExtraIamge = ({ inputChange, fieldName }) => {
  const [selectedImage, setSelectedImage] = useState();

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
    inputChange(e); // Trigger the parent's input change handler
  };

  return (
    <div className="w-[120px] h-[150px] flex justify-center items-center text-center border-2 border-dashed border-gray-400 hover:border-blue-500 bg-gray-100 relative rounded-lg shadow-md transition-all duration-300">
      <input
        name={fieldName}
        onChange={handleImageChange}
        className="absolute h-full w-full opacity-0 z-40 cursor-pointer"
        type="file"
      />

      {selectedImage ? (
        <img
          className="h-full w-full object-cover rounded-md"
          src={URL.createObjectURL(selectedImage)}
          alt="selected"
        />
      ) : (
        <div className="flex flex-col justify-center items-center text-gray-500">
          <FaImage size={30} className="mb-2" />
          <p className="text-sm">Upload Image</p>
        </div>
      )}
    </div>
  );
};
