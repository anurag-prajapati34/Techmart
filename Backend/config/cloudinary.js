


const cloudinary = require("cloudinary").v2;
const CLOUND_NAME=process.env.CLOUDINARY_CLOUD_NAME
const API_KEY=process.env.CLOUDINARY_API_KEY
const API_SECRET_KEY=process.env.CLOUDINARY_API_SECRET

console.log("clound:",CLOUND_NAME,API_KEY,API_SECRET_KEY)
cloudinary.config({
    cloud_name: CLOUND_NAME,
    api_key: API_KEY,
    api_secret:API_SECRET_KEY,
  });

module.exports=cloudinary