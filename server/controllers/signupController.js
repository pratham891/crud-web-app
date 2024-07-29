import user from "../models/user.js";

const signupController = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        const existUser = await user.findOne({ email });
        if (existUser) {return res.status(409).json({ msg: "user already exists" })}

        const newUser = new user({ username, email, password });
        await newUser.save();

        console.log(`new user saved successfully`);
        res.status(200).json({ success: "new user added" });

    } catch (err) {
        console.log(`can not add new user`);
        res.status(404).json({ err: "can not add new user" });
    }
}

export default signupController;
