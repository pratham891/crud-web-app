import mongoose from "mongoose";
import data from "./dataSchema.js";
import { dataSchema as postSchema } from "./dataSchema.js";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        posts: [postSchema]
    }
);

const user = mongoose.model("user", userSchema);

export default user;
