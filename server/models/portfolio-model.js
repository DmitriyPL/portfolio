import { Schema, model } from "mongoose";

const schema = new Schema({
    title: { type: String },
    description: { type: String },
    projectLink: { type: String },
    codeLink: { type: String },
    imgUrl: { type: String },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
})

export const PortfolioModel = model('Portfolio', schema);