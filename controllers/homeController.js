import { name } from "ejs"
import studentModel from "../models/studentschema.js"
const homeController = async(req,res)=>{

    res.render('index')
}


// create controller
const createController = async(req,res)=>{
    // console.log(req.body)
  const record = await studentModel({
        name:req.body.name,
        city:req.body.city,
        email:req.body.email,
        contact:req.body.contact,
    });
    if(record){
       await record.save();
       console.log("Data saved...")
    }else{
        console.log("Data not saved...")
    }
    res.render('index')
}


export {homeController,createController}