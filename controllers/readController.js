import studentModel from "../models/studentschema.js"
const readController = async(req,res)=>{
    try {
      const records = await  studentModel.find({})
       if(records){
        res.render('read.ejs',{'records':records})
       }else{
        res.render('read.ejs')
       }
    } catch (error) {
       console.log(error.message) 
    }
}



export {readController}