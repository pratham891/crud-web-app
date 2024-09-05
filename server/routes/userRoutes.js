import express from 'express';
import signupController from '../controllers/signupController.js';
import loginController from '../controllers/loginController.js';
import profileController from '../controllers/profileController.js';
import userAuth from '../middlewares/userAuth.js';
import emailValidator from '../middlewares/emailValidator.js';

const userRouter = express.Router();

// user register route
userRouter.post("/register", emailValidator, signupController);

// user login route
userRouter.post("/login", loginController);

// user profile route
userRouter.get("/profile", userAuth, profileController);

export default userRouter;
