import nodemailer from "nodemailer"
import config from "./config";

const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure: false,
    auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASS,
    }
})
 
export default transporter;

// var transport = nodemailer.createTransport({
//   host: "sandbox.smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "d1aa67409eac05",
//     pass: "ac1cea91d9afe0"
//   }
// });

// transport.sendMail({
//   from: "Private Person <from@example.com>",
//   to: "A Test User <to@example.com>",
//   subject: "Hello from Mailtrap",
//   text: "This is a test e-mail message."
// }, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log("Message sent: %s", info.messageId);
// });