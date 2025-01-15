import app from "./app";
import env from "./config/dotenv"

const PORT = env.port;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})