import express from 'express';
const router = express.Router();
import data from '../models/dataSchema.js';


// ADD DATA
router.post("/add-data", async (req, res) => {
    const { title, description } = req.body;
    try {
        const newData = new data({ title, description });
        await newData.save();
        console.log(`new data added successfully`);
        res.json({ msg: "new data added successfully" });
    } catch (err) {
        console.log(`error in adding new data`);
        res.status(404).json({ msg: "error in adding new data" });
    }
});



// VIEW ALL DATA IN HOME PAGE
router.get("/view", async (req, res) => {
    try {
        const viewDatas = await data.find();
        res.json(viewDatas);
    } catch (err) {
        console.log(`can't get data`);
        res.status(404).json({ msg: "can't get data" });
    }
});




// VIEW SINGLE DATA
router.get("/view/:id", async (req, res) => {
    try {
        const viewData = await data.findOne({ _id: req.params.id });
        if (viewData) {
            res.json(viewData);
        } else {
            res.json(`can't find this id`);
        }
    } catch (err) {
        console.log(`can't get data`);
        res.status(404).json({ msg: "can't get data" });
    }
});



// EDIT SINGLE DATA
router.put("/edit/:id", async (req, res) => {
    const { title, description } = req.body;
    try {
        const updatedData = await data.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { title, description } },
            { new: true }
        );
        if (updatedData) {
            res.json(updatedData);
            console.log(`data updated`);
        } else {
            res.json({ msg: "data not found" });
        }
    } catch (err) {
        console.log(`can't edit the data`);
        res.status(404).json({ msg: "can't edit the data" });
    }
});


// DELETE DATA
router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedData = await data.findOneAndDelete({ _id: req.params.id });

        if (deletedData) {
            res.json({ msg: "data deleted" });
        } else {
            res.json({ msg: "can't find data" });
        }
    } catch (err) {
        console.log(`can't delete the data`);
        res.status(404).json({ msg: "can't delete the data" });
    }
});


export default router;
