import jwt from "jsonwebtoken";
import env from "../config/dotenv.js"

const generateToken = (id, email, displayName) => {
  return jwt.sign({ id, email, displayName }, env.jwtSecret, { expiresIn: '7d' });
};

export default generateToken;