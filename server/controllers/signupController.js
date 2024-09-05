import user from "../models/user.js";

const signupController = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        const existUser = await user.findOne({ email });
        if (existUser) {return res.status(409).json({ msg: "user already exists" })}

        const newUser = new user({ username, email, password });
        await newUser.save();

        res.status(200).json({ success: "new user added" });

    } catch (err) {
        res.status(404).json({ err: "can not add new user" });
    }
}

export default signupController;
