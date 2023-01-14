import { skillService } from "../service/skill-service.js";

class SkillController {

    async getAllSkillItems(_, res, next){
        try {

            const skillItems = await skillService.getAll();

            return res.json(skillItems);

        } catch (e) {
            next(e);
        }
    }
}

export const skillController = new SkillController();