import React from 'react'
import './SmallImage.css'

export const SmallImage = ({image,setPreviewImage}) => {
  return (
    <div onClick={()=>setPreviewImage(image)} className="small-image ">
    <img  src={image} alt="image" />
  </div>
  )
}
