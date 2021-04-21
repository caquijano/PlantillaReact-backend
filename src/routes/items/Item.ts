import { Schema, model } from "mongoose";

const itemSchema = new Schema({
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
    kind:{
        type: String,
        required: true,
        trim: true,
        
    },
    stock:{
        type: Number,
        required: true,
        trim: true,
        
    },
    price:{
        type: Number,
        required: true,
        trim: true,
    }
},{
    versionKey: false,
    timestamps:true
})
export default model('Item', itemSchema);