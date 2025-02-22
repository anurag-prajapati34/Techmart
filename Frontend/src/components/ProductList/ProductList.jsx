import React from "react";
import "./ProductList.css";

import { ProductCardContainer } from "../../container/ProductCardContainer";

export const ProductList = ({ products, featured = false, all = false }) => {
  return (
    <>
      {
        products?.length > 0 ? <div className="proudct-list-container mt-8 mb-20">
          {products &&
            products.map((product, index) => {
              if (!all) {
                if (product.isFeatured === featured) {
                  return <ProductCardContainer product={product} />;
                }
              } else {
                return <ProductCardContainer product={product} />;
              }
            })


          }
        </div> : <div className="text-black text-2xl  text-center flex-1  flex items-center justify-center h-screen  ">Loading ...</div>

      }</>
  );
};
