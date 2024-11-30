const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
require("dotenv").config();
const {
  uploadProduct,
  getAllProducts,
  addProductToCart,
  getAllCartProducts,
  removeProductFromCart,
  updateCartProduct,
  delteAProduct,
  setProductRatingAndReview,
} = require("./controllers/productController");
const { registerUser, getUsers } = require("./controllers/userController");
const {
  placeAnOrder,
  getAllOrdersOfAUser,
  getAllOrders,
  updateOrderStatus,
} = require("./controllers/orderController");

const {handleFeedback} =require('./controllers/feedbackController')
const uploadProductImages = require("./middlewares/uploadProductImagesMiddleware");
dotenv.config();
//creating express app

const app = express();
app.use(express.json());
app.use(cors());
//PORT on that server run
const PORT = process.env.PORT || 8000;
const DB_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING;
//connecting server to DB

mongoose.connect(`${DB_CONNECTION_STRING}`);

app.post(
  "/upload",
  uploadProductImages,

  uploadProduct
);

//getting all products
app.get("/products", getAllProducts);

//user create route
app.post("/user", registerUser);

//adding product to the cart
app.post("/addToCart", addProductToCart);
//getting cart products fro specific user
app.get("/cart", getAllCartProducts);

app.post("/removeProduct", removeProductFromCart);

app.post("/updateCartProduct", updateCartProduct);
//placing order
app.post("/placeOrder", placeAnOrder);
//fetching orders for specific user
app.get("/userOrders", getAllOrdersOfAUser);
//all orders
app.get("/orders", getAllOrders);
//update order status by admin
app.post("/updateOrderStatus", updateOrderStatus);
//to delete a product
app.delete("/deleteAProduct", delteAProduct);
//seting review and rating for a product
app.post("/productRatingAndReview", setProductRatingAndReview);
//handling contact feedback 
app.post('/feedback',handleFeedback)
//handling contact feedback 
app.get('/users',getUsers)
app.listen(PORT, () => console.log("Server started at :", PORT));
