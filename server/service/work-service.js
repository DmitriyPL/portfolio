import { WorkPeriodModel } from "../models/work-period-model.js";
import { WorkModel } from "../models/work-model.js";

import { WorkPeriodDto } from "../dtos/work-period-dto.js"
import { WorkDto } from "../dtos/work-dto.js"

class WorkService {

    async getAll() {

        try {
            
            const workIPeriods = await WorkPeriodModel.find();
            
            const dtoWorkIPeriods = await Promise.all(workIPeriods.map(async period => { 
                
                const newWorks = await Promise.all(period.works.map( async work => await this.getWorkById(work._id)));
                
                return new WorkPeriodDto(period._id, period.year, newWorks);

            }));

            return dtoWorkIPeriods;

        } catch (e) {
            return [];
        }
    }

    async getWorkById(id) {
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