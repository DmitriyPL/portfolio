export class WorkPeriodDto {
    id;
    number;
    desc;
    works;

    constructor(id, number, desc, works ) {
        this.id = id;
        this.number = number;
        this.desc = desc;
        this.works = works;
    }
}