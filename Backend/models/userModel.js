const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
   name:{
    type:String
   },
    userAuthId:{
        type:String,
        required:true
    },
    cart:[
        {
            product_id:{
                type:String,
                required:true,
            },
            product:{
                type:Object,
                required:true
            },
            sizeToBuy:{
                type:String,
                required:true
            },
            quantityToBuy:{
                type:Number,
                required:true
            }



        }
    ],
    orders:[]

})

const userModel=mongoose.model('users',userSchema);
module.exports=userModel;