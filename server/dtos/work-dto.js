export class WorkDto {
    id;
    name;
    desc;
    company;
    url;

    constructor(model) {
        this.id = model._id;
        this.name = model.name;
        this.desc = model.desc;
        this.company = model.company;
        this.url = model.url;
    }
}