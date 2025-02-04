import { Server } from "socket.io"
import {verifySocketUser} from "../middlewares/socketMiddleware.js"

/**
 * Need to add dynamic endpoint for what chat socket I want to connect to
 */
export const initSocket = (server) => {

    const io = new Server(server, {
        path: "/chat",
        cors: {
            origin: "http://localhost:3000", // might be wrong, test and drop "/chat"
            methods: ["GET", "POST"],
            credentials: true
        }
    });

    io.use(verifySocketUser);

    io.on("connection", (socket) => {
        const chatId = socket.handshake.query.chatId
        console.log("User connected to socket", socket.user)
        socket.join(chatId);
        console.log(`Room ${chatId} joined`);

        socket.on("message", ({chatId, message}) => {
            io.to(chatId).emit("message", message)
        })

        socket.on("disconnect", () => {
            console.log("socket disconnected")
        })
    });

    return io;
}