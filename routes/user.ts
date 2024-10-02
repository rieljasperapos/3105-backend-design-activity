import express from "express";
import * as userController from "../controllers/userController";
import { logger } from "../middlewares/loggingMiddleware";
import { authentication } from "../middlewares/authMiddleware"; 

const router = express.Router();

router.get('/user', logger, userController.getProfile);

router.post('/register', logger, userController.register);

router.post('/signin', authentication, userController.login);

export default router;