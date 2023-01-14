import { tagService } from "../service/tag-service.js";

class TagController {

    async getAllTagItems(_, res, next){
        try {

            const tagItems = await tagService.getAll();

            return res.json(tagItems);

        } catch (e) {
            next(e);
        }
    }
}

export const tagController = new TagController();