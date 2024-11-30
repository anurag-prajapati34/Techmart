import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { SmallImage } from '../../components/SmallImage/SmallImage'

import { ProductContext } from "../../contexts/ProductContext";
import { toast } from "react-hot-toast";
import "./ProductDetailPage.css";

import StarRating from "../../components/StarRating";
import { getAverageRating } from "../../utils/getAverageRating";

import { FaCheckCircle, FaChevronRight, FaFontAwesome, FaTruckMoving } from "react-icons/fa";

export const ProductDetailPage = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [previwImage, setPreviewImage] = useState(product && product.thumbnail);
  const { addProductToUserCart, logedInUser, products, addProductRating } =
    useContext(ProductContext);
  const [comment, setComment] = useState();
  const [rating, setRating] = useState();
  const [sizeToBuy, setSizeToBuy] = useState("8");
  const [quantityToBuy] = useState(1);
  const navigate = useNavigate();



  const handleAddToCartBtnClick = () => {
    if (logedInUser) {
      addProductToUserCart(product, sizeToBuy, quantityToBuy);
    } else {
      toast.error("User not logined !");
    }
  };
  const handleBuyNowBtnClick = () => {
    if (logedInUser) {
      navigate("/order", {
        state: {
          product: product,
          quantityToBuy: quantityToBuy,
          sizeToBuy: sizeToBuy,
        },
      });
    } else {
      toast.error("User not logined !");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-screen  p-6">
      <div className="w-full h-full max-w-[1280px] sm:px-4 px-2 m-auto">

        <div className="product-display-container">
          <div className="product-images-container ">
            <div className="product-small-images  ">
              {product &&
                product.extraImages.map((image, index) => {
                  return (
                    <SmallImage image={image} setPreviewImage={setPreviewImage} />
                  );
                })}
            </div>

            <div className="product-main-image border shadow-xl">
              <img className="h-full " src={previwImage} alt="image" />
            </div>
          </div>

          {/* procuct description */}

          <div className="product-desc-container flex flex-col gap-1">

            <h1 className="text-2xl  font-semibold">{product && product.name}</h1>
            <div className="flex gap-4">
              <h1><b className="text-gray-500">Brand:</b>{product?.brand}</h1>
              <h1><b className="text-gray-500">Price:</b>₹{product?.price}</h1>
            </div>


















            <p className="my-6">{product && product?.fullDescription}</p>
            <div className="my-6">
              <h1 className="flex gap-1 items-center"><FaCheckCircle color="green" /> 100% original prouducts</h1>
              <h1 className="flex gap-1 items-center"><FaCheckCircle color="green" /> Pay on delivery might be available</h1>
              <h1 className="flex gap-1 items-center"><FaCheckCircle color="green" /> Easy 14 days returns and exchanges</h1>
            </div>

            <div className="flex gap-5">
              <button
                style={{ backgroundColor: "var(--primary-color)" }}
                onClick={handleAddToCartBtnClick}
                className="py-2 px-4  text-white  hover:bg-[rgba(0,0,0,0.8)] rounded-full"
              >
                ADD TO CART
              </button>
              <button
                style={{ border: "2px solid var(--primary-color)" }}
                onClick={() => logedInUser ? navigate('/order', { state: { products: [{ product, quantityToBuy,  }], "subtotalPrice":product?.price,"shippingFees":0} }) : toast.error("User not logedin")}
                className="py-2 px-4 border-2  text-black hover:bg-[rgba(120,150,176,0.094)] rounded-full"
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>





















        <div className="flex justify-between items-end xl:items-center ">
          <h1 className="text-lg xl:text-xl  font-semibold  px-3 mt-10">
            What people says
          </h1>

        </div>
        <div className="mt-3 ">
          {
            product?.reviews.map((review) => {

              return <div className="bg-white mt-3 w-full border rounded-xl px-4 py-2 text-start">

                <p className="font-semibold text-lg">{review?.userEmail
                }</p>
                <StarRating rating={getAverageRating(product?.reviews)} />
                <p>{review?.comment}</p>

              </div>
            })
          }
        </div>

        {/*reviews and ratings*/}
        <div className="flex justify-between items-end xl:items-center ">
          <h1 className="text-lg xl:text-xl  font-semibold  px-3 mt-10">
            Write review
          </h1>

        </div>
        <div className={`px-5 py-2 mt-3 bg-white  relative  sm:w-[400px] rounded-lg border text-start`}>
          {/* <p className="text-2xl">Rate the Product:</p> */}
          {[...Array(5)].map((_, index) => (
            <span
              className="text-[30px]"
              key={index}
              onClick={() => setRating(index + 1)}
              style={{
                color: index < rating ? "#F97316" : "gray",
                cursor: "pointer",
              }}
            >
              ★
            </span>
          ))}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (logedInUser) {
                if (rating) {
                  addProductRating(product?._id, comment, rating);
                } else {
                  toast.error("Add reting !")
                }
              } else {
                toast.error("User not logedin")
              }

            }}


            className="w-full mt-1"
          >
            <label>Write down your opinion about product</label>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              required
              className="w-full border-2  outline-none px-2 py-1 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="text-lg border-2 w-full bg-[var(--primary-color)]  text-white rounded-full px-4 py-1 mt-5"
            >
              Submit review
            </button>
          </form>

        </div>




















      </div>
    </div>
  );
};
