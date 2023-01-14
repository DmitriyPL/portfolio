import { contactService } from "../service/contact-service.js";

class ContactController {

    async getContact(_, res, next){
        try {

            const contactItems = await contactService.getContact();

            return res.json(contactItems);

        } catch (e) {
            next(e);
        }
    }
}

export const contactController = new ContactController();