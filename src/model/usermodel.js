const mongoose =require("mongoose");
const UserSchema =mongoose.Schema({ 
    email:String,
    password:String,
    name:String,
    phone_number:Number,
    role:String,
    createdat:{
        type:Date,
        defaultdate:Date.now
    }
  
})
module.exports=mongoose.model("user",UserSchema);

