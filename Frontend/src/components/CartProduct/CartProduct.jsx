import React, { useContext, useEffect, useState } from "react";

import { ProductContext } from "../../contexts/ProductContext";

import "react-toastify/dist/ReactToastify.css";
import "../SmallImage/SmallImage";


import { useNavigate } from "react-router-dom";
const CartProduct = ({
  product,
  product_id,
  sizeToBuy,
  quantityToBuy,
  setEachProductTotalPrice,
}) => {
  const navigate = useNavigate();


  const thumbnail = product?.thumbnail;
  const price = parseInt(product?.price);

  const name = product?.name;
  const [productQuantity, setProductQuantity] = useState(quantityToBuy);
  const { removeProductFromUserCart, updateCartProduct } =
    useContext(ProductContext);
  const totalPrice = productQuantity * price;

  const handleBuyBtnClick = () => {
    navigate("/order", {
      state: {
        product: product,
        quantityToBuy: quantityToBuy,
        sizeToBuy: sizeToBuy,
      },
    });
  };

  useEffect(() => {
    setEachProductTotalPrice((preve) => ({
      ...preve,
      [product_id]: { price, productQuantity },
    }));
  }, [productQuantity, product]);
  return (





<div

className="flex flex-wrap items-center justify-between border-b pb-6 hover:shadow-xl transition-shadow duration-300 bg-white shadow-lg rounded-lg p-4"
>
{/* Product Image and Info */}
<div className="flex items-center space-x-4 w-full sm:w-auto">
  <img

onClick={() =>
          navigate("/product-detail", { state: { product: product } })
      }
    src={thumbnail}
    alt={name}
    className="w-20 h-20 object-cover rounded-md"
  />
  <div>
    <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
    <p className="text-sm text-gray-600">Price: ${price}</p>
  </div>
</div>

{/* Quantity and Total */}
<div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-4 sm:mt-0">
  <div className="flex items-center space-x-2">
    <button
 onClick={() =>
                   setProductQuantity(
                     productQuantity > 1 ? productQuantity - 1 : productQuantity
                   )
                 }
      className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-200"
    >
      -
    </button>
    <span>{productQuantity}</span>
    <button
   onClick={() => setProductQuantity(productQuantity + 1)}
      className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-200"
    >
      +
    </button>
  </div>
  <p className="font-semibold text-gray-800 mt-2 sm:mt-0">
    Total: ${price *quantityToBuy}
  </p>
</div>

{/* Remove and Save Changes Buttons */}
<div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-4 sm:mt-0">
  <button
   onClick={() => removeProductFromUserCart(product_id)}
    className="text-red-500 hover:text-red-700 font-semibold transition duration-200"
  >
    Remove
  </button>
  <button 
  onClick={() => updateCartProduct(product_id, productQuantity)}
  className="text-blue-500 hover:text-blue-700 font-semibold transition duration-200">
    Save Changes
  </button>
</div>
</div>
  );
};

export default CartProduct;
