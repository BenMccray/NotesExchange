import { createContext, useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";


const URL = "http://localhost:8080/";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

    const socketRef = useRef(null);
    const [room, setRoom] = useState(null);

    useEffect(() => {
        
        if (!socketRef.current) {
            console.log("Attempting socket connection...")
            socketRef.current = io(URL, {
                reconnection: true,
                reconnectionAttempts: 10,
                reconnectionDelay: 500,
                query: {
                    foo: "connection from front end"
                }
                // transports: ["websocket"]
            });
            socketRef.current.on("connection", () => 
                console.log("Client connected to socket server"));

            socketRef.current.on("disconnect", () => 
                console.log("Client disconnected from socket server"));
            socketRef.current.open((err) => {
                if (err) console.log("Error occured during connection")
                else console.log(socketRef.current)
            });
            console.log(socketRef.current)

        }

        return () => {
            socketRef.current.disconnect();
            socketRef.current = null;
        };
    }, []);

    const joinRoom = (chatId) => {
        if (socketRef.current) {
            if (room) socketRef.current.emit("leaveRoom", room);

            socketRef.current.emit("joinRoom", chatId);
            setRoom(chatId);
        }
    };

    return (
        <SocketContext.Provider value={{socket: socketRef.current, joinRoom}}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);