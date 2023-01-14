import { TestimonialItemModel } from "../models/testimonial-model.js";

import {TestimonialDto} from "../dtos/testimonial-dto.js"

class TestimonialService {

    async getAll() {

        try {
            const testimonialItems = await TestimonialItemModel.find();
            const dtoTestimonialItems = testimonialItems.map(item =>           
                new TestimonialDto(item)
            );
            return dtoTestimonialItems;

        } catch (e) {
            return [];
        }
    }
}

export const testimonialService = new TestimonialService();