import { Server } from "socket.io"
import {verifySocketUser} from "../middlewares/socketMiddleware.js"

/**
 * Need to add dynamic endpoint for what chat socket I want to connect to
 */
export const initSocket = (server) => {

    console.log("Initializing server socket...")
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:3000", 
            methods: ["GET", "POST"],
            credentials: true,
            
        },
        allowEIO3: true,
        transports: ["websocket"]
    });
    io.use(verifySocketUser);

    io.on("connection", (socket) => {
        // const chatId = socket.handshake.query.chatId
        console.log("User connected to socket", socket.user)
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

    return io;
}