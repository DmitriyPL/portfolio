import { PortfolioModel } from "../models/portfolio-model.js";
import { tagService } from "../service/tag-service.js";

import { PortfolioDto } from "../dtos/portfolio-dto.js"

class PortfolioService {

    async getAll() {

        try {
            
            const portfolioItems = await PortfolioModel.find();
            
            const dtoPortfolioItems = await Promise.all(portfolioItems.map(async item => { 
                
                const newTags = await Promise.all(item.tags.map( async tag => await tagService.getTagById(tag._id)));
                
                return new PortfolioDto(item, newTags);

            }));

            return dtoPortfolioItems;

        } catch (e) {
            return [];
        }
    }
}

export const portfolioService = new PortfolioService();