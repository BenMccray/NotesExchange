import { Server } from "socket.io"
import {verifySocketUser} from "../middlewares/authMiddleware"

/**
 * Need to add dynamic endpoint for what chat socket I want to connect to
 */
export const initSocket = (server) => {

    const io = new Server(server, {
        cors: {
            origin: "http://localhost:3000/chat", // might be wrong, test and drop "/chat"
            methods: ["GET", "POST"],
            credentials: true
        }
    });

    io.use(verifySocketUser);

    io.on("connection", (socket) => {
        console.log("User connected to socket", socket.user)
        socket.on("joinRoom", (chatId) => {
            socket.join(chatId);
            console.log(`Room ${chatId} joined`);
        })

        socket.on("message", ({chatId}, message) => {
            io.to(chatId).emit("message", message)
        })

        socket.on("disconnect", () => {
            console.log("socket disconnected")
        })
    });

    return io;
}