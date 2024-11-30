import React, { useContext, useState } from "react";
import "./ProductCard.css";


import { toast } from "react-hot-toast";
import { ProductContext } from "../../contexts/ProductContext";
import {FirebaseAuthContext} from '../../contexts/FirebaseAuthContext'
import { useNavigate } from "react-router-dom";

export const ProductCard = ({
 product,
 productVeiwClick
}) => {

const { name,
  price,
  thumbnail,
 
  fullDescription,
  reviews,}=product;
const navigate=useNavigate();
  const [sizeToBuy,setSizeToBuy]=useState('8');
  const [quantityToBuy,setQuantityToBuy]=useState(1)
  const {addProductToUserCart}=useContext(ProductContext)
  const {logedInUser}=useContext(FirebaseAuthContext)
  const handleAddToCartBtnClick = () => {
    if (logedInUser) {
      addProductToUserCart(product, sizeToBuy, quantityToBuy);
    } else {
      toast.error("User not logined !");
    }
  };
  return (
    <div className="product-card flex flex-col justify-center items-center sm:max-w-[250px] bg-white hover:shadow-lg hover:border px-2 py-4 transition duration-300 ease-in-out">
      <div onClick={productVeiwClick} className="product-image-container overflow-hidden">
        <img src={thumbnail} alt="image" />
      </div>
      <div className="product-desc px-3     text-start w-full  ">
<p className="text-sm text-gray-700">{product?.brand+"-"+product?.category}</p>
        <h1 className="product-name">{name}</h1>
       
        
            <p className=" text-lg font-semibold">{'₹' + price}</p>
         
       
        <div className="w-full flex items-center justify-between gap-4 mt-4">

        <button onClick={()=>handleAddToCartBtnClick()} className="flex-1 py-1  max-w-[200px] rounded-lg  bg-[var(--primary-color)] hover:bg-[var(--btn-hover-color)] text-white 
          transition duration-300 ease-in-out
          ">Add to cart</button>


          <button onClick={()=> navigate('/product-detail',{state:{"product":product}})}  className="flex-1 py-1 border-2 border-gray-700  max-w-[200px] rounded-lg bg-gray-700 hover:bg-gray-800 text-white 
          transition duration-300 ease-in-out
          ">View Details</button>
        </div>
       
      </div>
    </div>
  );
};
