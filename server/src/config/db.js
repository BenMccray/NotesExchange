import mysql from "mysql2/promise";
import env from "./dotenv.js";


export const pool = mysql.createPool({
    host: env.db.host,
    user: env.db.user,
    password: env.db.password,
    database: env.db.database
});

