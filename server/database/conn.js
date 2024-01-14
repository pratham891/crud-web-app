import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.DB).then(
    console.log(`db connected`)
);
