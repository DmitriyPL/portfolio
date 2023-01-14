import { Schema, model } from "mongoose";

const schema = new Schema({
    name: { type: String },
    desc: { type: String },
    company: { type: String },
})

export const WorkModel = model('Works', schema);