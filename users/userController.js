import UserModel from "../models/user.js"


const createUser = async (req, res) => {
    try {
        const { email, username, date_of_birth } = req.body
        const existingUser = await UserModel.findOne({ email : email})
        if (existingUser) return res.status(400).json({
            status : false,
            message: "User Already exist"
        })
        const user = await UserModel.create({
            email,
            username,
            date_of_birth
        })
        return res.status(201).json({
            status: "success",
            message: "User created successfully",
            data: user
        })
    } catch (error) {
        return res.status(422).json({
            status : "error",
            message : error.message
        })
    }
}

export default {
    createUser
}