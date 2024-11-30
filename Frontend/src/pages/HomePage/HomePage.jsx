import React, { useContext, useEffect } from "react";

import MainHeading from "../../components/MainHeading";


import { ProductList } from "../../components/ProductList/ProductList";
import { ProductContext } from "../../contexts/ProductContext";


import Tinnyheading from "../../components/Tinnyheading";

import HeroSection from "../../components/HeroSection";


import CategoryBar from "../../components/CategoryBar";



export const HomePage = () => {
  const { products, newArrivalsRef } = useContext(ProductContext);

  useEffect(()=>{
    window.scrollTo(0,0,)
  },[])
  return (
    <div className="w-full max-w-[1280px] m-auto sm:px-4 px-2 ">
      {/* <HeroSection /> */}
<HeroSection/>



{/**categories bar */}
<CategoryBar/>






      <div className="flex items-center justify-between w-full" ref={newArrivalsRef}>
        <MainHeading text={"New Arrivals"} />
        <Tinnyheading text={
        'PRODUCTS'
      }/>
      </div>
      

      <ProductList products={products?.slice(0,Math.min(8,products?.length))} all={true} />
      {/*Best sellers*/}

    
      <div className="flex items-center justify-between w-full" ref={newArrivalsRef}>
        <MainHeading text={"Featured "} />
        <Tinnyheading text={
        'PRODUCTS'
      }/>
      </div>

      <ProductList products={products?.slice(0,Math.min(8,products?.length))} featured={true} />

      
       
     

    </div>
  );
};
