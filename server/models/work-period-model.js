import { Schema, model } from "mongoose";

const schema = new Schema({
    number: { type: Number },
    desc: { type: String },
    works: [{ type: Schema.Types.ObjectId, ref: 'Work' }],
})

export const WorkPeriodModel = model('WorkPeriods', schema);