import { mailService } from "../service/mail-service.js";

class EmailController {

    async sendEmail(req, res, next){
        try {

            const { ...data } = req.body;
            console.log(req.body);
            
            await mailService.sendMail(data);
            
            return res.json({message: 'Sended'});

        } catch (e) {
            next(e);
        }
    }
}

export const emailController = new EmailController();