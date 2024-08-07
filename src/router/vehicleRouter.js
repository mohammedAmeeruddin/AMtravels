const express =require("express");
const{driverVehicleregistation,tripBooking,getallVehicals,getallbookeTrips}=require("../controller/vehiclecontroller");
const {authmiddleware}=require("../middleware/auth");
const Router=express.Router();

Router.post("/driverVehicleregistation",authmiddleware,driverVehicleregistation);
Router.post("/bookingtrip",authmiddleware,tripBooking);
Router.get("/Allvehical",authmiddleware,getallVehicals);
Router.get("/gettripbooked",authmiddleware,getallbookeTrips);

module.exports=Router;
