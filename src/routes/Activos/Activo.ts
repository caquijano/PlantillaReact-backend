import { Schema, model } from "mongoose";

const activoSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim:true
    },
    description:{
        type: String,
        required: false,
        trim:true
    },
},{
    versionKey: false,
    timestamps:true
})
export default model('Activo', activoSchema);