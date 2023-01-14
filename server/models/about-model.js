import { Schema, model } from "mongoose";

const schema = new Schema({
    title: { type: String  },
    description: { type: String },
    imgUrl: { type: String }
})

export const AboutItemModel = model('AboutItems', schema);