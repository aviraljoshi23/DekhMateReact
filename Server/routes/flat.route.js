import express from  "express";
import { addFlat, list } from "../controller/flat.controller.js";
import multer from "multer";

const flatRoute = express.Router();
const upload =  multer({dest:"public/FlatImage"});
flatRoute.post("/addFlat",upload.array("flatImages"),addFlat);
flatRoute.get("/flat-list",list);

export default flatRoute;