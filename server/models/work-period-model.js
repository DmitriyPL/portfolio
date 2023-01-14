import { Schema, model } from "mongoose";

const schema = new Schema({
    year: { type: String },
    works: [{ type: Schema.Types.ObjectId, ref: 'Work' }],
})

export const WorkPeriodModel = model('WorkPeriods', schema);