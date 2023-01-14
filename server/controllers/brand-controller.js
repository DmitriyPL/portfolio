import { brandService } from "../service/brand-service.js";

class BrandController {

    async getAllBrandItems(_, res, next){
        try {

            const brandItems = await brandService.getAll();

            return res.json(brandItems);

        } catch (e) {
            next(e);
        }
    }
}

export const brandController = new BrandController();