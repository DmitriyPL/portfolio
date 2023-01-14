export class ContactDto {
    id;
    email;
    phone;

    constructor(model) {
        this.id = model._id;
        this.email = model.email;
        this.phone = model.phone;
    }
}