import {createUser, findUserByEmail} from "../services/userService.js";
import generateToken from "../utils/generateToken.js";
import verifyPassword from "../utils/verifyPassword.js"
import * as bcrypt from "bcrypt";

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

        const jwtToken = generateToken(user.insertId, email, displayName)
        res.cookie("jwtToken", jwtToken, 
            { 
                httpOnly: true, 
                secure: true, 
                sameSite: "strict" 
            });
        res.status(201).json(
            {
                message: "User registered successfully",
                user: {
                    userId: user.insertId,
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
        const jwtToken = generateToken(id, email, displayName)
        res.cookie("jwtToken", jwtToken, 
            { 
                httpOnly: true, 
                secure: true, 
                sameSite: "strict" 
            });
        res.status(200).json(
            {
                message: "User signed in",
                user: {
                    userId: id,
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