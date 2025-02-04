import getSocketCookie from '../utils/getSocketCookie.js';
import jwt from "jsonwebtoken";
import env from "../config/dotenv.js"

export const verifySocketUser = (socket, next) => {
    const token = getSocketCookie(socket);
  
    if (!token) {
      return next(new Error("Anthentication failed, no user token"))
    }
  
    try {
      const decoded = jwt.verify(token, env.jwtSecret);
      socket.user = decoded
      next();
    } catch (err) {
      next(new Error("Unexpected error"));
    }
  }