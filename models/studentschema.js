import mongoose from "mongoose";
const studentschema = new mongoose.Schema({
    'name':{
        type:String,
        require:true
    },
    'city':{
        type:String,
        require:true
    },
    'email':{
        type:String,
        require:true
    },
    'contact':{
        type:String,
        require:true
    }
});

const studentModel = new mongoose.model('crud',studentschema)

export default studentModel;