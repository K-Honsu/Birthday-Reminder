import mongoose from "mongoose";
const schema = mongoose.Schema

const UserSchema = new schema({
    email : {type : String, required : true, unique : true},
    username : {type : String, required : true, unique : true},
    date_of_birth : {type : Date, required: true},
    created_at : {type : Date, default : Date.now()}
})

const UserModel = mongoose.model("users", UserSchema)

export default UserModel