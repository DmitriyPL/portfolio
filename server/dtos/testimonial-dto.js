export class TestimonialDto {
    id;
    name;
    company;
    text;
    imgUrl;

    constructor(model) {
        this.id = model._id;
        this.name = model.name;
        this.company = model.company;
        this.imgUrl = model.imgUrl;
        this.text = model.text;
    }
}