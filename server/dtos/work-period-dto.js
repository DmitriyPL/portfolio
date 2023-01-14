export class WorkPeriodDto {
    id;
    year;
    works;

    constructor(id, year, works ) {
        this.id = id;
        this.year = year;
        this.works = works;
    }
}