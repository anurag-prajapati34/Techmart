export const addProductToUserCart=(userAuthId,product)=>{

fetch(`${import.meta.env.VITE_SERVER_URL}/addToCart`,{
    method:"POST",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify({
        "userAuthId":userAuthId,
        "product":product
    })
}).then((product)=>alert("Added to cart")).catch((err)=>alert("Error adding to cart"))

}