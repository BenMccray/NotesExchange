import pool from "../config/db";

export const createUser = async (email, password) => {
    const [result] = await pool.execute(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [email, password]
    );
    return result;
};

export const findUserByEmail = async (email) => {
    const [rows] = await pool.execute("SELECT * FROM users WHERE email = ?",
        [email]
    );
    return rows[0];
};

export const findUserByName = async (displayName) => {
    const [rows] = await pool.execute("SELECT * FROM users WHERE displayName = ?",
        [displayName]
    );
    return rows[0]
}