import express from "express";
import { signin, signup,update} from "../controller/user.controller.js";
import multer from "multer";
const userRoute  = express.Router();
const upload =  multer({dest:"public/UserProfiles"})
userRoute.post("/signup",signup);
userRoute.post("/signin",signin);
userRoute.post("/user-update",upload.single("userProfileImage"),update)
export default userRoute;