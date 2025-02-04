import app from "./app.js";
import env from "./config/dotenv.js"
import http from "http"
import { initSocket } from "./config/socket.js";

const server = http.createServer(app);
initSocket(server);

const PORT = env.port;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})