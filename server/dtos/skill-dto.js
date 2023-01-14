export class SkillDto {
    id;
    name;
    icon;
    bgColor;

    constructor(model) {
        this.id = model._id;
        this.name = model.name;
        this.icon = model.icon;
        this.bgColor = model.bgColor;
    }
}