export class PortfolioDto {
    title;
    description;
    projectLink;
    codeLink;
    imgUrl;
    tags;

    constructor(model, newTags) {
        this.id = model._id;
        this.title = model.title;
        this.description = model.description;
        this.projectLink = model.projectLink;
        this.codeLink = model.codeLink;
        this.imgUrl = model.imgUrl;
        this.tags = newTags;
    }
}