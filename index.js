require("dotenv").config({path:".env"})
const app =require("./app");
const {connectDB}=require("./mongoBD")
const PORT=process.env.SERVER_PORT;
connectDB();
app.listen(PORT,()=>{
    console.log(`server is connected at ${PORT}`);
});



