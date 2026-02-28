//    This is the file where we will make multiple route

import express from "express";
import { loginUser,registorUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register",registorUser);
userRouter.post("/login",loginUser);

export default userRouter;