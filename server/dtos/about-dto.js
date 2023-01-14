export class AboutDto {
    id;
    title;
    imgUrl;
    description;

    constructor(model) {
        this.id = model._id;
        this.title = model.title;
        this.imgUrl = model.imgUrl;
        this.description = model.description;
    }
}