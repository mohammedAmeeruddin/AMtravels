const mongoose =require("mongoose");
require("dotenv").config(".env");
const URL=process.env.MONGO_URL;
exports.connectDB=()=>{
    mongoose
    .connect(URL)
    .then((res)=>console.log("mongooseBD is connected"))
    .catch((res)=>console.log("database error"))
};