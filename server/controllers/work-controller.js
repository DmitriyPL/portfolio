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

    async getWorkByID(req, res, next){
        try {

            const id = req.params.id;
            const workItem = await workService.getWorkByID(id);

            return res.json(workItem);

        } catch (e) {
            next(e);
        }
    }
}

export const workController = new WorkController();