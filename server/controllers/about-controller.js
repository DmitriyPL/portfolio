import { aboutService } from "../service/about-service.js";

class AboutController {

    async getAllAboutItems(_, res, next){
        try {

            const aboutItems = await aboutService.getAll();

            return res.json(aboutItems);

        } catch (e) {
            next(e);
        }
    }
}

export const aboutController = new AboutController();