import nodemailer from "nodemailer"

const sendBirthdayEmail = async (email) => {
    try {
        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth : {
                user : process.env.EMAIL_USER,
                pass : process.env.EMAIL_PASS
            }
        })
        const mailOptions = {
            from: "donotreply@gmail.com",
            to: email,
            subject: "Happy Birthday!",
            text: "Wishing you a fantastic birthday filled with joy and happiness!"
        };

        await transporter.sendMail(mailOptions)
    } catch (error) {
        
    }
}

export default sendBirthdayEmail