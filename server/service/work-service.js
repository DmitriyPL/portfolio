import { WorkPeriodModel } from "../models/work-period-model.js";
import { WorkModel } from "../models/work-model.js";

import { WorkPeriodDto } from "../dtos/work-period-dto.js"
import { WorkDto } from "../dtos/work-dto.js"

class WorkService {

    async getAll() {

        try {

            const workIPeriods = await WorkPeriodModel.find().sort({'number': -1});
            const dtoWorkIPeriods = await Promise.all(workIPeriods.map(async period => {
                const newWorks = await Promise.all(period.works.map( async work => await this.getWorkByID(work._id)));
                return new WorkPeriodDto(period._id, period.number, period.desc, newWorks);
            }));

            return dtoWorkIPeriods;

        } catch (e) {
            return [];
        }
    }

    async getWorkByID(id) {
        try {
            const workItem = await WorkModel.findById(id);
            const dtoworkItem = new WorkDto(workItem);
            return dtoworkItem;

        } catch (e) {
            return {};
        }
    }
}

export const workService = new WorkService();