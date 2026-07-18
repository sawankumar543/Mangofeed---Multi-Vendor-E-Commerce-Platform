import config from "../config/config.js";
import transporter from "../config/mail.config.js";
import getVerifyEmailTemplate from "../template/verify-email.template.js";

class MailService {
    async sendEmail({ to, subject, html }) {
        return await transporter.sendMail({
            from: config.MAIL_FROM,
            to,
            subject,
            html
        });
    }
    async sendVerificationEmail(user, token) {
        const verificationUrl = `${config.FRONTEND_URL}/verify-email?token=${token}` 
        const html = getVerifyEmailTemplate({user, verificationUrl, expiryMinutes: 15})
        return this.sendEmail({
            to: user.email,
            subject: "Welcome to Mangofeed - Verify your email",
            html
        })
    }
}

export default new MailService();