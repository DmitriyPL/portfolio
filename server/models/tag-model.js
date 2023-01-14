import { Schema, model } from "mongoose";

const schema = new Schema({
    name: { type: String  },
})

export const TagModel = model('Tags', schema); 