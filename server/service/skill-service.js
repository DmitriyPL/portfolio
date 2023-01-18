import { SkillModel } from "../models/skill-model.js";

import {SkillDto} from "../dtos/skill-dto.js"

class SkillService {

    async getAll() {

        try {
            const skillItems = await SkillModel.find();
            const dtoSkillItems = await Promise.all(skillItems.map(item =>
                new SkillDto(item)
            ));
            return dtoSkillItems;

        } catch (e) {
            return [];
        }
    }
}

export const skillService = new SkillService();