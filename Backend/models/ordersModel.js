const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({

    userAuthId:{
        type:String,
        required:true,
    },
    shipingInfo:{
        type:Object,
        required:true,
    },
    products:[],
    status:{
        type:String,
        required:true,

    }

},{
    timestamps:true
})

 const OrderModel=mongoose.model('orders',orderSchema);
 module.exports=OrderModel;
