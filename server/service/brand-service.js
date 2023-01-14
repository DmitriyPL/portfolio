import { BrandModel } from "../models/brand-model.js";

import {BrandDto} from "../dtos/brand-dto.js"

class BrandService {

    async getAll() {

        try {
            const brandItems = await BrandModel.find();
            const dtoBrandItems = brandItems.map(item => new BrandDto(item));
            return dtoBrandItems;

        } catch (e) {
            return {};
        }
    }
}

export const brandService = new BrandService();