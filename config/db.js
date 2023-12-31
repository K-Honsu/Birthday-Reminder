import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


const connect = async (url) => {
    mongoose.connect(url || process.env.MONGODB_URI)

    mongoose.connection.on("connected", () => {
        console.log("Connected to DB successfully");
    })

    mongoose.connection.on("error", (err) => {
        console.log("An error occured while connecting to MongoDB");
        console.log(err);
    })
}

export default {connect}