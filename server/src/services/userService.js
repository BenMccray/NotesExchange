import {pool} from "../config/db.js";

export const createUser = async (displayName, email, password) => {
    const [result] = await pool.execute(
        "INSERT INTO users (display_name, email, password) VALUES (?, ?, ?)",
        [displayName, email, password]
    );
    return result;
};

export const findUserByEmail = async (email) => {
    const [rows] = await pool.execute("SELECT * FROM users WHERE email = ?",
        [email]
    );
    console.log(rows)
    return rows[0];
};

export const findUserByName = async (displayName) => {
    const [rows] = await pool.execute("SELECT * FROM users WHERE display_name = ?",
        [displayName]
    );
    return rows[0]
}