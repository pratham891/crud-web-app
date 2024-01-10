import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:BrH0ZUR1ScfvAjMl@cluster0.aiwxgtf.mongodb.net/?retryWrites=true&w=majority").then(
    console.log(`db connected`)
);
