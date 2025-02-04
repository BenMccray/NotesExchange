import cookie from "cookie";

const getSocketCookie = (socket) => {
    const cookies = cookie.parse(socket.handshake.headers.cookie || "");
    const token = cookies.jwtToken;
    return token
}

export default getSocketCookie;