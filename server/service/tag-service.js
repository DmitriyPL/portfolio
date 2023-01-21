import { TagModel } from "../models/tag-model.js";

import {TagDto} from "../dtos/tag-dto.js"

class TagService {

    async getTagById(id) {

        try {
            const tagItems = await TagModel.findById(id);
            return new TagDto(tagItems);

        } catch (e) {
            return {};
        }
    }

    async getAll() {

        try {
            const tagItems = await TagModel.find();
            const allTag = tagItems.splice(4, 1)[0];
            tagItems.push(allTag);
            const dtoTagItems = tagItems.map(item => new TagDto(item));
            return dtoTagItems

        } catch (e) {
            return {};
        }
    }
}

export const tagService = new TagService();