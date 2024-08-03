import data from "../../models/dataSchema.js";
import user from "../../models/user.js";

const addDataController = async (req, res) => {
    const { title, description } = req.body;
    const email = req.headers.email;

    try {
        // create post
        const newData = new data({ title, description });

        // find user
        const thisUser = await user.findOne({ email });
        if (!thisUser) { return res.status(404).json({ 404: "user not found" }) }

        // add post to user's "posts" array
        thisUser.posts.push(newData);
        await thisUser.save();
        res.status(200).json({ msg: "new post added successfully" });

    } catch (err) {
        console.log(`Error in addDataController.js file: ${err}`);
        res.status(500).json({ 500: "internal server error" });
    }
}

export default addDataController;
