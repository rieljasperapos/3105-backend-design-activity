import express from "express";
import * as userController from "../controllers/userController";
import { logger } from "../middlewares/loggingMiddleware";
import { authentication } from "../middlewares/authMiddleware"; 

const userRouter = express.Router();

userRouter.get('/user/:id', authentication, userController.getProfile);

userRouter.post('/register', logger, userController.register);

userRouter.post('/signin', logger, userController.login);

export default userRouter;