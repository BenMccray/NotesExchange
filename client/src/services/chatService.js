import { io } from "socket.io-client"


export const connectSocket = () => {

    const socket = io("http://localhost:8080",
        {
            path: "/ws",
            transports: ["websocket"],
            withCredentials: true
        }
    )
}