import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard/ProductCard';

export const ProductCardContainer = ({product}) => {
    const navigate=useNavigate();
    const {name,price,thumbnail}=product;

    const handleProductViewClick=()=>{
       
        navigate('/product-detail',{state:{"product":product}});

    }
  return (
    <>
    <ProductCard  productVeiwClick={handleProductViewClick} product={product} />
    </>
  )
}
