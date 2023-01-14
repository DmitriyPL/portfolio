import { Schema, model } from "mongoose";

const schema = new Schema({
    imgUrl: { type: String  },
    name: { type: String  },
})

export const BrandModel = model('Brands', schema);