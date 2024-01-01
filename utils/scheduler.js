import schedule from "node-schedule"
import UserModel from "../models/user.js"
import sendBirthdayEmail from "./mailer.js"

const birthdayScheduler = () => {
    console.log("Birthday scheduler running fine");
    schedule.scheduleJob("0 12 * * *", async () => {
        try {
            const today = new Date();
            const usersWithBirthday = await UserModel.find({
                date_of_birth: {
                    $gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
                    $lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
                }
            });
            for (const user of usersWithBirthday) {
                const { date_of_birth, email } = user
                const birthday = new Date(date_of_birth)
                schedule.scheduleJob(birthday, async () => {
                    await sendBirthdayEmail(email)
                })
            }
        } catch (error) {
            console.error("Error sending message", error.message)
        }
    })
}

export default birthdayScheduler