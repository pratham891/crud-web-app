import user from "../../models/user.js";

const viewPostController = async (req, res) => {
    const email = req.headers.email;

    try {

        // find user
        const thisUser = await user.findOne({ email });
        if (!thisUser) { return res.status(404).json({ 404: "user not found" }) }

        // get all posts
        const userPosts = thisUser.posts;
        res.status(200).json(userPosts);

    } catch (err) {
        console.log(`error in viewPostController.js: ${err}`);
        res.status(500).json({ 500: "internal server error" });
    }
}

export default viewPostController;
