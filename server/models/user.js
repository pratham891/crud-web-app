import mongoose from "mongoose";
import data from "./dataSchema";

const userSchema = new mongoose.Schema(
    {
        username: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: ture},
        posts: [{type: Schema.Types.ObjectId, ref:data}]
    }
);

const user = mongoose.model("user", userSchema);

export default user;
