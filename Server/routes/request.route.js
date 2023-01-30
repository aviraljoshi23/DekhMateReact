import express from "express";
import { sendFlatRequest } from "../controller/request.controller.js";

const requestRoute =  express.Router();

requestRoute.post("/sendFlatRequest",sendFlatRequest);

export default requestRoute;