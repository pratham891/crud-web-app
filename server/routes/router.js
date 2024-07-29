import express from 'express';
import userAuth from '../middlewares/userAuth.js';
import addDataController from '../controllers/post routes/addDataController.js';
import viewPostController from '../controllers/post routes/viewPostController.js';
import viewSinglePostController from '../controllers/post routes/viewSinglePostController.js';
import editPostController from '../controllers/post routes/editPostController.js';
import deletePostController from '../controllers/post routes/deletePostController.js';
const router = express.Router();

// ADD DATA
router.post("/add-data", userAuth, addDataController);

// VIEW ALL DATA IN HOME PAGE
router.get("/view", userAuth, viewPostController);

// VIEW SINGLE DATA
router.get("/view/:id", userAuth, viewSinglePostController);

// EDIT SINGLE DATA
router.put("/edit/:id", userAuth, editPostController);

// DELETE DATA
router.delete("/delete/:id", userAuth, deletePostController);


export default router;
