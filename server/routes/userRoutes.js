import express from 'express';
import jwt from 'jsonwebtoken';
import user from '../models/user';
const userRouter = express.Router();

// user register route
userRouter.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    try {

        const newUser = new user({ username, email, password });
        await newUser.save();

        console.log(`new user saved successfully`);
        res.status(200).json({ success: "new user added" });

    } catch (err) {
        console.log(`can not add new user`);
        res.status(404).json({ err: "can not add new user" });
    }
});

// user login route
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {

        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            console.log(`email not found`);
            return res.status(404).json({ 401: "email not found" });
        }

        // validate password
        const userPwd = existingUser.password;
        if (userPwd != password) {
            console.log(`wrong password`);
            res.status(401).json({ 401: "wrong password" });
        }

        // generate jwt token


    } catch (err) {
        console.log(`unable to login`);
        res.status(404).json({ err: "unable to login" });
    }
});
