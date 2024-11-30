const expres =require('express')
const mongoose=require('mongoose');

const feedbackSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

const FeedbackModel=mongoose.model('feedbacks',feedbackSchema)
module.exports=FeedbackModel;