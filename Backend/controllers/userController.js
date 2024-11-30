const userModel = require("../models/userModel");

exports.registerUser = async (req, res) => {
  const { userAuthId } = req.body;

  try {
    const user = await userModel
      .create({ userAuthId: userAuthId })
      .then((user) => {
        return res.json("User created");
      })
      .catch((err) => {
        return res.json("error creating user", err);
      });
  } catch (error) {
    return res.json("Server error");
  }
};

exports.getUsers=async(req,res)=>{

  try{
const users=await userModel.find({})
if(users){
  return res.status(200).json({"users":users})
}
  }catch(error){
return res.status(500).json({'error':error})
  }
}
