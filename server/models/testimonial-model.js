import { Schema, model } from "mongoose";

const schema = new Schema({
    name: { type: String  },
    company: { type: String },
    imgUrl: { type: String },
    text: { type: String },
})

export const TestimonialItemModel = model('Testimonials', schema);