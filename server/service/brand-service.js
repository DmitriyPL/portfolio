import { BrandModel } from "../models/Brand-model.js";

import {BrandDto} from "../dtos/Brand-dto.js"

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