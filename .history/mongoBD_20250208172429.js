const mongoose =require("mongoose");
require("dotenv").config(".env");
const URL='mongodb+srv://ameeruddincodersnest:<B7pysY8vQvm6JxOx>@cluster0.x7s0g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
console.log(URL);

exports.connectDB=()=>{
    mongoose    
    .connect(URL)
    .then((res)=>console.log("mongooseBD is connected"))
    .catch((res)=>console.log("database error"))
    log
};