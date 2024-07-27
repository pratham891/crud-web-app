import express from 'express';
import signupController from '../controllers/signupController.js';
import loginController from '../controllers/loginController.js';
const userRouter = express.Router();

// user register route
userRouter.post("/register", signupController);

// user login route
userRouter.post("/login", loginController);

export default userRouter;
