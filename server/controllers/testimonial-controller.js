import { testimonialService } from "../service/testimonial-service.js";

class TestimonialController {

    async getAllTestimonialItems(_, res, next){
        try {

            const testimonialItems = await testimonialService.getAll();

            return res.json(testimonialItems);

        } catch (e) {
            next(e);
        }
    }
}

export const testimonialController = new TestimonialController();