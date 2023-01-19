import express from "express";
import {newAccount } from "../controller/user.controller.js";
import multer from "multer";

const upload = multer({dest:"public/UserProfiles"})
const userRoute  = express.Router();
userRoute.post("/create-account",upload.single("userProfile"),newAccount);

export default userRoute;