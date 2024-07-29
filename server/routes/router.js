import express from 'express';
import data from '../models/dataSchema.js';
import user from '../models/user.js';
import userAuth from '../middlewares/userAuth.js';
const router = express.Router();


// ADD DATA
router.post("/add-data", userAuth, async (req, res) => {
    const { title, description } = req.body;
    const email = req.headers.email;

    try {

        const newData = new data({ title, description });
        // await newData.save();

        // find user
        const thisUser = await user.findOne({ email });
        if (!thisUser) { return res.status(404).json({ 404: "user not found" }) }

        // add new post
        thisUser.posts.push(newData);
        await thisUser.save();
        res.json({ msg: "new data added successfully" });

    } catch (err) {
        console.log(`error in adding new data`);
        res.status(404).json({ msg: "error in adding new data" });
    }
});



// VIEW ALL DATA IN HOME PAGE
router.get("/view", userAuth, async (req, res) => {
    const email = req.headers.email;

    try {
        // find user
        const thisUser = await user.findOne({ email });
        if (!thisUser) { return res.status(404).json({ 404: "user not found" }) }

        // get all posts
        const userPosts = thisUser.posts;
        res.status(200).json(userPosts);

        // const viewDatas = await data.find();
        // res.json(viewDatas);
    } catch (err) {
        console.log(`can't get data`);
        res.status(404).json({ msg: "can't get data" });
    }
});




// VIEW SINGLE DATA
router.get("/view/:id", userAuth, async (req, res) => {
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


        // const viewData = await data.findOne({ _id: req.params.id });
        // if (viewData) {
        //     res.json(viewData);
        // } else {
        //     res.json(`can't find this id`);
        // }
    } catch (err) {
        console.log(`can't get data`);
        res.status(404).json({ msg: "can't get data" });
    }
});



// EDIT SINGLE DATA
router.put("/edit/:id", userAuth, async (req, res) => {
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





        // const updatedData = await data.findOneAndUpdate(
        //     { _id: req.params.id },
        //     { $set: { title, description } },
        //     { new: true }
        // );

        // if (updatedData) {
        //     res.status(200).json(updatedData);
        //     console.log(`data updated`);
        // } else {
        //     res.json({ msg: "data not found" });
        // }
    } catch (err) {
        console.log(`can't edit the data`);
        res.status(404).json({ msg: "can't edit the data" });
    }
});


// DELETE DATA
router.delete("/delete/:id", userAuth, async (req, res) => {
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





        // const deletedData = await data.findOneAndDelete({ _id: req.params.id });

        // if (deletedData) {
        //     res.json({ msg: "data deleted" });
        // } else {
        //     res.json({ msg: "can't find data" });
        // }
    } catch (err) {
        console.log(`can't delete the data`);
        res.status(404).json({ msg: "can't delete the data" });
    }
});


export default router;
