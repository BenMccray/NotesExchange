import React, {useEffect, useState} from "react";
import {io} from "socket.io-client";

const URL = "http://localhost:8080/chat" //might be wrong, test and drop "/chat"

export function useSocket(chatId) {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!chatId) {
            return 
        }
        const sock = io(URL,
            {
                path: "/ws",
                transports: ["websocket"],
                withCredentials: true
            }
        );
    
        sock.emit("joinRoom", chatId);
    
        sock.on("message", (message) => {
            setMessages((prev) => [...prev, message]);
        })
    
        setSocket(sock);
    
        return () => {
            sock.disconnect();
        }
    }, [chatId]);

    const sendMessage = (message) => {
        if (socket) {
            socket.emit("message", {chatId, message});
        }
    };

    return {messages, sendMessage};
}