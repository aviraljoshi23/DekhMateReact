import express from "express";

import { add,list,edit } from "../controller/needroom.controller.js";

const needRoomRoute  = express.Router();
needRoomRoute.post("/add",add);
needRoomRoute.get("/list",list);
needRoomRoute.post("/update",edit)

export default needRoomRoute;