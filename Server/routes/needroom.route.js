import express from "express";

import { add,list,edit } from "../controller/needroom.controller.js";

const userRoute  = express.Router();
userRoute.post("/add",add);
userRoute.get("/list",list);
userRoute.post("/update",edit)

export default userRoute;