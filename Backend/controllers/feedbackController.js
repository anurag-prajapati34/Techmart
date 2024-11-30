const FeedbackModel = require("../models/feedbackModel");

exports.handleFeedback=async (req,res)=>{
    const {name,email,phone,message}=req.body;
    try{
const result =await FeedbackModel.create({
    name,
    email,
    phone,
    message

})
if(result){
    return res.status(200).json({"success":"Contact message submit successfully"})
}else{
    return res.status(400).json({"error":"Unexpected error"})
}


    }catch(err){
        return res.status(500).json({"error":err})
    }

}