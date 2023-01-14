import { workService } from "../service/work-service.js";

class WorkController {

    async getAllWorkItems(_, res, next){
        try {

            const workItems = await workService.getAll();

            return res.json(workItems);

        } catch (e) {
            next(e);
        }
    }
}

export const workController = new WorkController();