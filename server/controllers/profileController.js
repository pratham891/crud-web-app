import user from "../models/user.js";

const profileController = async (req, res) => {
    try {
        const email = req.headers.email;
        const thisUser = await user.findOne({ email });
        if (!thisUser) { return res.status(404).json({ 404: "user not found" }) };
        res.status(200).json({ thisUser });
    } catch (err) {
        res.status(401).json({ err: "error in viewing profile" });
    }
}

export default profileController;
