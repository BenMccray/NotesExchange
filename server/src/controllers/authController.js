import {createUser, findUserByEmail} from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import verifyPassword from "../utils/verifyPassword.js"
import * as bcrypt from "bcrypt";
import {pool} from "../config/db.js"

export const register = async (req, res) => {
    const {displayName, email, password} = req.body;
    try {
        console.log("here")
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json(
                {
                    message: "Email already in use"
                }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser(displayName, email, hashedPassword);

        res.status(201).json(
            {
                message: "User registered successfully",
                token: generateToken(user.insertId, email, displayName),
                user: {
                    userId: user.insertId,
                    userEmail: email,
                    displayName: displayName
                }
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
    const {email, password} = req.query;

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
        const user = await findUserByEmail(email);
        const {id, display_name: displayName, password: hashedPassword, _} = user
        const isMatch = verifyPassword(password, hashedPassword);

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
                token: generateToken(id, email, displayName),
                user: {
                    userId: id,
                    userEmail: email,
                    displayName: displayName
                }
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