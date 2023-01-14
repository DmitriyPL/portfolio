import { portfolioService } from "../service/portfolio-service.js";

class PortfolioController {

    async getAllPortfolioItems(_, res, next){
        try {

            const portfolioItems = await portfolioService.getAll();

            return res.json(portfolioItems);

        } catch (e) {
            next(e);
        }
    }
}

export const portfolioController = new PortfolioController();