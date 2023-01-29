import express from "express";
import { sendRequestMail } from "../controller/message.controller.js";

const messageRoute =  express.Router();

messageRoute.post("/sendFlatmail",sendRequestMail);

export default messageRoute;