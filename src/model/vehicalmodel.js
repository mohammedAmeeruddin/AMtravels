const mongoose=require("mongoose");
const vehicalSchema= new mongoose.Schema(
  {  vehicle_number:String,
    vehicle_type:String,
    airbags_safity:String,
    createdby:String,
    driver_licienc_num:String,
    createdat:{
        type:Date,
        defalut:Date.now
    },
  
});
const Vehicle=mongoose.model("vehical",vehicalSchema);

const bookingSchema=new mongoose.Schema({
  duration:String,
    fromdate:String,
    todate:String,
    bookedby:String,
    driverid:String,
})
const Booking=mongoose.model("booking",bookingSchema);

module.exports={Vehicle,Booking};
