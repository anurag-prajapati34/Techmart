import React from "react";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBag, faShoppingBasket, faShoppingCart} from  '@fortawesome/free-solid-svg-icons'
import { FaShoppingCart } from "react-icons/fa";
export const CartIcon = () => {
  const { cartProducts } = useContext(ProductContext);

  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("cart")} className="relative cursor-pointer">
      <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
      <span className="bg-black text-white rounded-full h-4 w-4 flex justify-center items-center absolute left-[50%] bottom-0 text-[12px] font-semibold">
        {cartProducts ? cartProducts.length : 0}
      </span>
    </div>
  );
};
