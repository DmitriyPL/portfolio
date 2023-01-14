import { Schema, model } from "mongoose";

const schema = new Schema({
    email: { type: String  },
    phone: { type: String  },
})

export const ContactModel = model('Contacts', schema); 