const express =require("express");
const app=express();
const userRouter =require("./src/router/userRouter");
const vehicleRouter=require("./src/router/vehicleRouter");
app.use(express.json());
app.use("/api",userRouter);
app.use("/api",vehicleRouter);


module.exports=app;

