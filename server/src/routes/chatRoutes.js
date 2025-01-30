import express from "express";
import { initSocket } from "../config/socket";

const chatRouter = express.Router();

chatRouter.get("/chat", initSocket)