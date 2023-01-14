import { Schema, model } from "mongoose";

const schema = new Schema({
    name: { type: String  },
    bgColor: { type: String },
    icon: { type: String }
})

export const SkillModel = model('Skills', schema);