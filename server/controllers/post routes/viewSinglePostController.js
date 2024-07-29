import user from "../../models/user.js";

const viewSinglePostController = async (req, res) => {
    const email = req.headers.email;
    try {
        // find user
        const thisUser = await user.findOne({ email });
        if (!thisUser) { return res.status(404).json({ 404: "user not found" }) }

        // get posts
        const thisPost = thisUser.posts.id(req.params.id);
        if (!thisPost) { return res.status(404).json({ 404: "post not found" }) }

        // return
        res.status(200).json(thisPost);

    } catch (err) {
        console.log(`error in viewSinglePostController.js: ${err}`);
        res.status(500).json({ 500: "internal server error" });
    }
}

export default viewSinglePostController;
