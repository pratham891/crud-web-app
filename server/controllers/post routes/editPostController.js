import user from "../../models/user.js";

const editPostController = async (req, res) => {

    const { title, description } = req.body;
    const email = req.headers.email;

    try {

        // find user
        const thisUser = await user.findOne({ email });
        if (!thisUser) { return res.status(404).json({ 404: "user not found" }) }

        // find post
        const thisPost = thisUser.posts.id(req.params.id);
        if (!thisPost) { return res.status(404).json({ 404: "post not found" }) }

        // update post
        thisPost.title = title;
        thisPost.description = description;

        // save user
        await thisUser.save();
        res.status(200).json({ msg: "post updated" });

    } catch (err) {
        console.log(`error in editPostController.js: ${err}`);
        res.status(500).json({ 500: "internal server error" });
    }
}

export default editPostController;