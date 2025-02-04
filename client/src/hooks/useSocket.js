import {useEffect, useState, useRef} from "react";
import {io} from "socket.io-client";

const URL = "http://localhost:8080" //might be wrong, test and drop "/chat"

export function useSocket(chatId) {
    const socketRef = useRef(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!chatId) return

        if (socketRef.current) socketRef.current.disconnect();

        const sock = io(`${URL}`,
            {
                path: "/chat",
                query: {chatId: chatId},
                transports: ["websocket"],
                withCredentials: true
            }
        );
    
        socketRef.current = sock;

        sock.on("message", (message) => {
            setMessages((prev) => [...prev, message]);
        })
    
        sock.on("connect", () => console.log(`Connected to chatRoom ${chatId}`));
        sock.on("disconnect", () => console.log(`Disconnected from chatRoom ${chatId}`))

        return () => {
            sock.disconnect();
        };

    }, [chatId]);

    const sendMessage = (message) => {
        if (socketRef.current) {
            socketRef.current.emit("message", {chatId, message});
        }
    };

    return {messages, sendMessage};
}