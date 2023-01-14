import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD, 
            },

        });
    }

    async sendMail(data){
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: "plhome@yandex.ru",
            subject: "Prortfolio",
            text: `
            ${data.name}
            ${data.email}
            ${data.message}
            `
        })
    }
}

export const mailService = new MailService();