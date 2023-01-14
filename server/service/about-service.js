import { AboutItemModel } from "../models/about-model.js";

import {AboutDto} from "../dtos/about-dto.js"

class AboutService {

    async getAll() {

        try {
            const aboutItems = await AboutItemModel.find();
            const dtoAboutItems = aboutItems.map(item =>           
                new AboutDto(item)
            );
            return dtoAboutItems;

        } catch (e) {
            return [];
        }
    }
}

export const aboutService = new AboutService();