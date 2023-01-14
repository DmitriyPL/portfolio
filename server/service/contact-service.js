import { ContactModel } from "../models/contact-model.js";

import {ContactDto} from "../dtos/contact-dto.js"

class ContactService {

    async getContact() {

        try {
            const contactItem = await ContactModel.findOne();
            return new ContactDto(contactItem)

        } catch (e) {
            return {};
        }
    }
}

export const contactService = new ContactService();