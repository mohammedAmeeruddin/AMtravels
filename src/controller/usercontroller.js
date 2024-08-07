const User =require("../model/usermodel");
const jwt =require("jsonwebtoken");
const bcrypt=require("bcrypt");
const { respo } = require("../utli");
const { Roles } = require("../../constants");
const _string=process.env.JWT_STRING;

exports.signupuser =async(req,res)=>{
    try {
        const { email,password,name,phone_number,role}=req.body;
        if(!email || !password || !name || !phone_number || !role )
            {
            return respo(res,400,'please fill the datails')};
            const userexist =await User.find({email});
            if (userexist.length > 0)
                {return respo(res,404,' all ready exist')};
            if(!Roles.includes(role)){
                return respo(res,404,'given role is not matching')};
            const hashpassword=await bcrypt.hash(password,10);
            const newuser =await User.create({email,password:hashpassword,name,phone_number,role}); 
            return respo(res,200,{sucesses:true,newuser});      
    } catch (error) {
        const message=error?.message;
        return respo(res,500,message);
};};

exports.loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return respo(res,400,'please fill the dtails')};
            const userExist=await User.findOne({email});
            if (!userExist){
                return respo(res,400,'user not found')};
            const ispasswordmatch=await bcrypt.compare(password,userExist.password);
            if(!ispasswordmatch){
                return respo(res,400,'invalid password')};   
            const token =jwt.sign({id:userExist._id},_string);
            return respo(res,200,{sucesses:true,user:userExist,token});  
    } catch (error) {
        const message=error?.message;
        return respo(res,500,message);};
};

exports.getallUsers=async(req,res)=>{
    try {
        const users=await User.find();
        return respo(res,200,users);
        
    } catch (error) {
        const message=error?.message;
        return respo(res,500,message);};
};

exports.getAUser=async(req,res)=>{
    try {
        
        return respo(res,200,{user:req.user});
         } catch (error) {
            const message=error?.message;
        return respo(res,500,message);}; 
};



exports.updateUser=async(req,res)=>{
    try {
        const {id}=req.user;
       await User.find({id});
        const {email,name,role}=req.body;
        if(!email || !name || !role){
            return res.status(400).json({message:"please give the details for up date"});};
         const newUser=await User.findByIdAndUpdate(id,
            {email,name,role},{new:true});
         return res.status(200).json({sucesses:true,newUser,message:"update sucessfull"});
    } catch (error) {
        const message=error?.message;
        return respo(res,500,message);};
};

exports.deleteuser=async(req,res)=>{
    try {
         const id=req.query.id;
        const deleteuser =await User.findByIdAndDelete(id)
       return respo(res,200,{deleteuser:'user deleted sucessfully'}); 
    } catch (error) {
        const message=error?.message;
        return respo(res,500,message); };
};


exports.getallDrivers=async(req,res)=>{
    try {
        const drivers=await User.find({role:"DRIVER"});
        return respo(res,200,drivers);
    } catch (error) {
        const message=error?.message;
        return respo(res,500,message);}
};