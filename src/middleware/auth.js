const User =require("../model/usermodel");
const jwt =require("jsonwebtoken");
 exports.authmiddleware=async(req,res,next)=>{
    try {
       const {token}=req.headers;
       if(!token){return res.status(404).json({message:"please provide the token"});};
       const {id} = jwt.verify(token,process.env.JWT_STRING);
       const isuser =await User.findById(id);
       if(!isuser){return res.status(401).json({message:"no driver found"});};
       req.user=isuser;
       
       next();
    } catch (error) {
        return res.status(500).json({message:error.mesage});};
 };