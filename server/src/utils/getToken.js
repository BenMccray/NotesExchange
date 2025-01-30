import cookie from "cookie";


export const getReqToken = (req) => {
    return req.headers['authorization']?.split(' ')[1];
}

export const getSocketToken = (socket) => {
    const cookies = cookie.parse(socket.handshake.headers.cookie || "");
    const token = cookies.jwtToken;
    return token
}

