import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';

const CategoryBar = () => {
  const { categoryForFilter, setCategoryForFilter } = useContext(ProductContext);
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Smartphone',
      image: 'https://i.pinimg.com/736x/ea/2e/ed/ea2eed53172a010727e21217b1cddad6.jpg',
    },
    {
      name: 'Smartwatch',
      image: 'https://i.pinimg.com/736x/f4/a0/63/f4a0633672de8bf2348e9ca1a333bb08.jpg',
    },
    {
      name: 'Tab',
      image: 'https://i.pinimg.com/736x/04/1c/e0/041ce0f82897d63e2118fc03cc85289f.jpg',
    },
    {
      name: 'TV',
      image: 'https://i.pinimg.com/736x/34/4d/bf/344dbfbfc264d10d89c7fe94b1d250fe.jpg',
    },
    {
      name: 'Headphone',
      image: 'https://i.pinimg.com/736x/5c/d7/3e/5cd73e2588463130cfae7bbd03479f1d.jpg',
    },
  ];

  return (
    <div className="py-12 px-6 ">
      <h1 className="text-center text-4xl font-bold mb-12 text-gray-800">
         Explore Top Product Categories
      </h1>
      <div className="flex gap-8 flex-wrap items-center justify-center">
        {categories?.map((category, index) => (
          <div
            key={index}
            onClick={() =>
              navigate('/shop', { state: { sendCategory: category?.name?.toLowerCase() } })
            }
            className="group flex flex-col items-center justify-center gap-4 transform transition-transform hover:scale-105"
          >
            <div
              style={{
                backgroundImage: `url(${category?.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
              className="h-[150px] w-[150px] overflow-hidden flex items-center justify-center bg-gray-200 rounded-full shadow-lg relative"
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg">Shop Now</span>
              </div>
            </div>
            <h1 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">
              {category?.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
