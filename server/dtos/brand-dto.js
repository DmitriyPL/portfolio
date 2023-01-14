export class BrandDto {
    id;
    imgUrl;
    name;

    constructor(model) {
        this.id = model._id;
        this.name = model.name;
        this.imgUrl = model.imgUrl;
    }
}