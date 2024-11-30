import React, { useContext, useEffect, useState } from "react";

import FilterBar from '../components/FilterBar/FilterBar'
import { ProductContext } from "../contexts/ProductContext";
import { ProductList } from "../components/ProductList/ProductList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faX } from "@fortawesome/free-solid-svg-icons";
const ShopPage = () => {

    const { products, shopProducts } = useContext(ProductContext);


    const [isFilterBar, setIsFilterBar] = useState(false)
    useEffect(()=>{
        window.scrollTo(0,0,)
      },[])
    

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 ">
            {/* Header Section */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 text-white text-center py-16 px-4">
                <h1 className="text-4xl font-bold">Explore Our Electronics</h1>
                <p className="mt-2 text-lg">Find the latest gadgets at unbeatable prices</p>
            </div>
            <div className="w-full md:flex max-w-[1280px] min-h-[100vh] m-auto sm:px-4 px-2  overflow-hidden mt-4 relative">


                <div className="">
                    <div className="md-hide ">
                        <FilterBar />
                    </div>

                    <div onClick={() => setIsFilterBar(true)} className="border border-var(--priamry-color)] px-4 py-2 rounded-xl max-w-[100px] md:hidden cursor-pointer">
                        Filter <FontAwesomeIcon icon={faFilter} />
                    </div>

                </div>
                <div className={`absolute top-0 left-0 sm:px-4 px-2 border-r-2 shadow-lg h-full flex gap-2 bg-white ${isFilterBar ? 'visible' : 'hidden'}`}>
                    <FilterBar />
                    <FontAwesomeIcon onClick={() => setIsFilterBar(false)} icon={faX} className="text-black text-xl cursor-pointer mt-8" />
                </div>



              
                <ProductList products={shopProducts} all={true} />
                




            </div>
        </div>
    );
};

export default ShopPage;
