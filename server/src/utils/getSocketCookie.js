import cookie from "cookie";

const getSocketCookie = (socket) => {
    console.log("Socket cookie: ", socket.handshake.headers.cookie)
    const cookies = cookie.parse(socket.handshake.headers.cookie || "");
    console.log(cookies)
    const token = cookies.jwtToken;
    return token
}

export default getSocketCookie;