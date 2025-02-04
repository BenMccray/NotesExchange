import dotenv from "dotenv";

const result = dotenv.config();

if (result.error) {
    console.error("Error loading environment variables", result.error);
    process.exit(1);
}

export default {
    port: process.env.PORT || 8347,
    db: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    },
    jwtSecret: process.env.JWT_SECRET,
    mongoEndpoint: process.env.MONGO_DB_ENDPOINT,
};

