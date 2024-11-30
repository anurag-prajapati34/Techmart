import React, { useContext, useEffect, useState } from 'react';
import CartProduct from '../components/CartProduct/CartProduct';
import { ProductContext } from '../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';

import emptyCartImage from '../assets/Illustrations/Empty Cart 1.png'


const CartPage = () => {




    const { products, cartProducts } = useContext(ProductContext);
    const [subtotalPrice, setSubtotalPrice] = useState(0);
    const [eachProductTotalPrice, setEachProductTotalPrice] = useState({});
    const navigate = useNavigate();
    const shippingFees = 0;
    
  
  
  
    useEffect(() => {
      var totalPrice = 0;
      if (eachProductTotalPrice) {
        Object.keys(eachProductTotalPrice).map((product) => {
         
          const { price, productQuantity } = eachProductTotalPrice[product];
         
          const totalPriceForAproduct = price * productQuantity;
         
          totalPrice += totalPriceForAproduct;
        });
        setSubtotalPrice(totalPrice);
      }
    }, [eachProductTotalPrice, cartProducts]);
  // Dummy cart items
  useEffect(()=>{
    window.scrollTo(0,0,)
  },[])


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto px-6">
        {/* Cart Header */}
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Your Cart
        </h1>

        <div className="  rounded-lg  max-w-5xl m-auto">
          {/* Cart Items */}
          <div className="flex flex-col gap-4">
            {cartProducts?.length>0?cartProducts?.map((item,index) => {
               const { product, product_id, sizeToBuy, quantityToBuy } = item;
               return (
                 <CartProduct
                   key={index}
                   product={product}
                   product_id={product_id}
                   sizeToBuy={sizeToBuy}
                   quantityToBuy={quantityToBuy}
                   setEachProductTotalPrice={setEachProductTotalPrice}
                 />
               );
               }):<div className='flex items-center justify-center min-h-[40vh]'>
                <img src={emptyCartImage}/>
                </div>}
          </div>

          {/* Cart Summary */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between text-lg font-semibold text-gray-800">
            <div className="text-gray-600">
              <p>Subtotal: {subtotalPrice}</p>
              <p>Shipping: {shippingFees}</p>
             
            </div>
            <div className="text-right mt-4 sm:mt-0">
              <p>Total: ${subtotalPrice+shippingFees}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 space-y-4 sm:space-y-0">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto">
              Continue Shopping
            </button>
            <button onClick={() => navigate('/order', { state: { products: cartProducts,subtotalPrice,shippingFees } })} className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300 w-full sm:w-auto">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
