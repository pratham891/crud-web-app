import user from "../../models/user.js";

const deletePostController = async (req, res) => {

    const email = req.headers.email;

    try {

        // find user
        const thisUser = await user.findOne({ email });
        if (!thisUser) { return res.status(404).json({ 404: "user not found" }) }

        // Find post within user's posts array by post ID
        const postIndex = thisUser.posts.findIndex(post => post._id.toString() === req.params.id);
        if (postIndex === -1) {
            return res.status(404).json({ msg: "Post not found" });
        }

        // Remove the post from the posts array
        thisUser.posts.splice(postIndex, 1);

        // save user and respond 200
        await thisUser.save();
        res.status(200).json({ msg: "post deleted successfully" });

    } catch (err) {
        console.log(`error in deletePostController.js: ${err}`);
        res.status(500).json({ 500: "internal server error" });
    }
}

export default deletePostController;
