import { Router } from "express";

import { aboutController } from '../controllers/about-controller.js';
import { skillController } from "../controllers/skill-controller.js";
import { workController } from "../controllers/work-controller.js";
import { portfolioController } from "../controllers/portfolio-controller.js";
import { tagController } from "../controllers/tag-controller.js";
import { emailController } from "../controllers/email-controller.js";
import { contactController } from "../controllers/contact-controller.js";
import { testimonialController } from "../controllers/testimonial-controller.js";
import { brandController } from "../controllers/brand-controller.js";

export const router = Router();

router.get('/about', aboutController.getAllAboutItems);
router.get('/portfolio', portfolioController.getAllPortfolioItems)
router.get('/skills', skillController.getAllSkillItems);
router.get('/experience', workController.getAllWorkItems);
router.get('/tags', tagController.getAllTagItems);
router.get('/contact', contactController.getContact);
router.get('/testimonial', testimonialController.getAllTestimonialItems);
router.get('/brands', brandController.getAllBrandItems)

router.post('/email', emailController.sendEmail);


