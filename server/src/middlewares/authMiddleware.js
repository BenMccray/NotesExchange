import getToken from '../utils/getToken.js';
import jwt from "jsonwebtoken";
import {jwtSecret} from "./config/dotenv.js"

export const authMiddleware = (req, res, next) => {
  const token = getToken(req);
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
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
  