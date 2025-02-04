import {getReqToken} from '../utils/getToken.js';
import jwt from "jsonwebtoken";
import env from "../config/dotenv.js"

export const verifyUser = (req, res, next) => {
  const token = getReqToken(req);
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, env.jwtSecret);
    req.user = decoded; // Attach user info to request object
    next();
  } catch (err) {
    
    if (err.name === "TokenExpiredError") {
      res.status(401).json(
        {
          message: "Token has expired"
        }
      )
  }
    res.status(401).json(
      {
        message: 'Invalid token'
      }
    );
  }
};
  

