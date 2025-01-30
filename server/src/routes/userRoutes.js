import express from "express";

const userRouter = express.Router();

userRouter.get("/groups", () => console.log("groups route"))

export default userRouter;