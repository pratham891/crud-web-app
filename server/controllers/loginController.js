import user from '../models/user.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const loginController = async (req, res) => {
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
        const token = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN, { expiresIn: '7d' }); // thala for a reason

        res.status(200).json({ token });

    } catch (err) {
        console.log(`unable to login`);
        res.status(500).json({ err: "unable to login" });
    }
}

export default loginController;
