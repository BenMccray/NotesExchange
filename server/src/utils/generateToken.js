import jwt from "jsonwebtoken";
import env from "../config/dotenv"

const generateToken = (id) => {
  return jwt.sign({ id }, env.jwtSecret, { expiresIn: '30d' });
};

export default generateToken;