import {createUser, findUserByEmail} from "../models/userModel";
import { generateToken } from "../utils/generateToken";
import {verifyPassword} from "../utils/verifyPassword"
import bcrypt from "bcrypt";
import pool from "../config/db"

export const register = async (req, res) => {
    const {email, password} = req.body;

    try {
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json(
                {
                    message: "Email already in use"
                }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser(email, hashedPassword);

        res.status(201).json(
            {
                message: "User registered successfully",
                token: generateToken(user.insertId)
            }
        );
    } catch (err) {
        res.status(500).json(
            {
                message: "Server error when registering user"
            }
        )
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const existingUser = await findUserByEmail(email);
        if (!existingUser) {
            return res.status(400).json(
                {
                    message: `No user with email: ${email}`
                }
            )
        };

        // should only be 1 row
        const [rows] = pool.execute("SELECT id, password FROM users WHERE email = ?",
            [email]
        )
        const isMatch = verifyPassword(password, rows[0].password);

        if (!isMatch) {
            return res.status(400).json(
                {
                    message: `Password is incorrect`
                }
            )
        }
        res.status(200).json(
            {
                message: "User signed in",
                token: generateToken(rows[0].id)
            }
        )

    } catch (err) {
        res.status(500).json(
            {
                message: "Server error during user authentication"
            }
        )
    }
}