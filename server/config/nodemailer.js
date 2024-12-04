const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL,// this is email id of sender
        pass: process.env.SENDER_PASSWORD// this is password of sender
    }
});

const sendMail = async (email,subject,text) => {
    try {
        console.log('Sending email to ', email);
        const info = await transporter.sendMail({
            from: process.env.SENDER_MAIL,
            to: email,
            subject,
            text,
        });
        console.log('Message sent: %s', info);
    } catch (error) {
        console.log(error);
    }
}
// sendMail('kavyamsachdeva@gmail.com','Test','This is a test email');
module.exports = { sendMail };
