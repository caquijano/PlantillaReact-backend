import { Schema, model, Document } from 'mongoose'

export interface PhotoInterface extends Document {
    title: string;
    description: string;
    imagePath: string;
}

const photoSchema = new Schema({
    title: String,
    description: String,
    imagePath: String
});




export default model<PhotoInterface>('Photo', photoSchema);