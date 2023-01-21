import express from "express";

import { signin, signup } from "../controller/user.controller.js";

const userRoute  = express.Router();
userRoute.post("/signup",signup);
userRoute.post("/signin",signin);


export default userRoute;