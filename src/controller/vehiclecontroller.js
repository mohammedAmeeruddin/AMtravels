const {Vehicle, Booking}=require("../model/vehicalmodel");
const { respo } = require("../utli");


exports.driverVehicleregistation=async(req,res)=>{
    try {
        const {vehicle_number,vehicle_type,airbags_safity,driver_licienc_num}=req.body;
        if(!vehicle_number || !vehicle_type || !airbags_safity || !driver_licienc_num){
            return respo(res,404,'please fill the details')};
            if(req.user.role != "DRIVER"){return respo(res,404,'custemor are not allowed to register vehical')}
            const createdby=req.user._id;
            const vehicle=await Vehicle.create({vehicle_number,vehicle_type,airbags_safity,createdby,driver_licienc_num})
                console.log(vehicle);
            return  respo(res,200,{sucesses:true,vehicle:vehicle,message:"vehicle has been sucessfully register"});
        } catch (error) {
        const message=error?.message;
    return respo(res,500,message);};
};

exports.tripBooking=async(req,res)=>{
    try {
        const{duration,fromdate,todate,driverid}=req.body;
        if(!duration || !fromdate || !todate || !driverid){
            return respo(res,404,'please fill all the details');}
           const bookedby=req.user._id;
            if(req.user.role !=="CUSTEMER"){
                return respo(res,404,'driver are not allow to book the trip');}
               console.log(bookedby);
                const isbookingavailable=await Booking.find({duration,fromdate,todate,driverid});
                console.log(isbookingavailable);
                if(isbookingavailable.length>0){return respo(res,400,'vahical is not available at that date');
                   
                }console.log("find by booking down")
                    const data={duration,fromdate,todate,driverid,bookedby};
                    console.log(data);
                  const createtrip = await Booking.create(data);
                    return respo(res,200,createtrip)
             
     } catch (error) {
        const message=error?.message;
        return respo(res,500,message);}
};

exports.getallVehicals=async(req,res)=>{
    try {
       
       const vehicals= await Vehicle.find();
       if(!vehicals){return respo(res,400,'no vehicals found')}
        return respo(res,200,{vehicals});  
    } catch (error) {
        const message=error?.message;
        return respo(res,500,message);};};

        exports.getallbookeTrips=async(req,res)=>{
            try {
                let tripBooked;
                console.log(req.user)
                if(req.user.role =="CUSTEMER"){
                    tripBooked=await Booking.find();
                    
                }else if (req.user.role == "DRIVER") {
                    tripBooked=await Booking.find();
                }else{return respo(res,200,tripBooked)};
                    return respo(res,200,tripBooked)   
            } catch (error) {
                const message=error?.message;
            return respo(res,500,message);};
        };

        exports.bookedtimings=async(req,res)=>{
            try {
                
            } catch (error) {
                
            }
        }