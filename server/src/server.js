import app from "./app.js";
import env from "./config/dotenv.js"
import http from "http"
import { Server } from "socket.io"
import {verifySocketUser} from "./middlewares/socketMiddleware.js"


const server = http.createServer(app);
const io = new Server(server, {
    cors: ["http://localhost:3000", "http://localhost:3001"],
    allowEIO3: true,
    // transports: ["websocket"]
});
// io.use(verifySocketUser);
io.on("connection", (socket) => {
    // const chatId = socket.handshake.query.chatId
    console.log("User connected to socket", socket.id)
    console.log(socket.handshake.query.foo)
    socket.on("joinRoom", (chatId) => {
        socket.join(chatId)
        console.log(`Room ${chatId} joined`);
    })
    

    // socket.on("message", ({chatId, message}) => {
    //     io.to(chatId).emit("message", message)
    // })

    socket.on("disconnect", () => {
        console.log("socket disconnected")
    })
});

const PORT = env.port;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})