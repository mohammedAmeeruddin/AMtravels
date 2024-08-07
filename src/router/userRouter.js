const express =require("express");
const {signupuser,loginUser,getAUser,getallUsers,updateUser,deleteuser,getallDrivers}=require("../controller/usercontroller");
 const {authmiddleware}=require("../middleware/auth");
const Router =express.Router();
Router.post("/create/signup",signupuser);
Router.post("/login/user",loginUser);
Router.get("/getallusers",authmiddleware,getallUsers);
Router.get("/getalldrivers",authmiddleware,getallDrivers)
Router.get("/getauser",authmiddleware,getAUser);
Router.put("/updateuser",authmiddleware,updateUser);
Router.delete("/deleteuser",deleteuser);


module.exports=Router;
