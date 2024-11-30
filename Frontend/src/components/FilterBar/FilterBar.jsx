import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext';
import './FilterBar.css'
import { useLocation } from 'react-router-dom';
const FilterBar = () => {

    const { products, setShopProducts, } = useContext(ProductContext);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [priceRange, setPriceRange] = useState(100000000);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [availableBrands, setAvailableBrands] = useState([]);
    const [availableCategories, setAvailableCategories] = useState([])
    const sendCategory = useLocation().state?.sendCategory;





    const handleCategoriesChekcBoxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setFilteredCategories((prev) => [...prev, value]);
        } else {
            const newCategories = filteredCategories.filter((category) => category !== value);
            setFilteredCategories(newCategories);
        }
    }

    const handleBrandsCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setBrands((prev) => [...prev, value]);
        } else {
            const newBrands = brands.filter((brand) => brand !== value);
            setBrands(newBrands);
        }
    }

    useEffect(() => {
        if (sendCategory) {
            setFilteredCategories((prev) => [...prev, sendCategory]);
        }
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {




        const matchesCategories = filteredCategories.length > 0 ? products?.filter((product) => filteredCategories.includes(product?.category?.toLowerCase())) : products;

       

        const matchesBrands = brands.length > 0 ? matchesCategories.filter((product) => brands.includes(product?.brand?.toLowerCase())) : matchesCategories;

        const matchesPrice = priceRange ? matchesBrands?.filter((product) => priceRange >= parseInt(product?.price)) : matchesBrands;


     
        if (matchesPrice) {
            setFilteredProducts(matchesPrice)
            setShopProducts(matchesPrice);
        }




    }, [filteredCategories,  brands, priceRange])

    useEffect(() => {
        const allUniqueBrands = [...new Set(products?.map(product => product?.brand))];
        setAvailableBrands(allUniqueBrands);

        const allUniqueCatagories = [...new Set(products?.map(product => product?.category))]
        setAvailableCategories(allUniqueCatagories);


    }, [products])


    return (
        <div className='w-[250px] gap-3 h-full py-8 flex flex-col items-start pr-4'>



            {/**brands */}

            <div className='w-full '>
                <h1 className='text-lg font-semibold text-start'>brands</h1>
                <div className='flex flex-col gap-3 mt-2 w-full'>


                    {
                        availableBrands.length > 0 && availableBrands?.map((brnd, index) => <label className='text-lg flex gap-4 items-center custom-checkbox w-full'>
                            <input onChange={handleBrandsCheckboxChange} className='h-[30px] w-full cursor-pointer checkbox-input' type='checkbox' value={brnd?.toLowerCase()} />
                            <span class="checkbox-label w-full">
                                {brnd}
                            </span>

                        </label>)
                    }



                </div>
            </div>

            {/** categories / sub categories*/}
            <div>
                <h1 className='text-lg font-semibold text-start'>Categories</h1>
                <div className='flex flex-wrap gap-3 mt-2'>


                    {
                        availableCategories.length > 0 && availableCategories.map((ctg, index) => <label className='text-lg flex gap-4 items-center custom-checkbox w-full'>
                            <input onChange={handleCategoriesChekcBoxChange} checked={filteredCategories.includes(ctg?.toLowerCase())} className='h-[40px] w-full cursor-pointer checkbox-input' type='checkbox' value={ctg?.toLowerCase()} />
                            <span class="checkbox-label  w-full">
                                {ctg}
                            </span>

                        </label>)
                    }



                </div>
            </div>




            {/**price range */}

            <div className='text-start w-full'>
                <h1 className='text-lg font-semibold'>Price-( ₹{priceRange})</h1>
                <div className='flex flex-col gap-1 w-full'>


                    <label className='slider-container'>

                        <input onChange={(e) => setPriceRange(e.target.value)} min={0} max={999999} type='range' name='pricerange' className=' slider' value={priceRange} />


                    </label>


                </div>
            </div>
        </div>
    )
}

export default FilterBar