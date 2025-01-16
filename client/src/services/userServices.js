import api from "./api";

export const getUserGroups = async () => {
    const token = localStorage.getItem("jwtSecret");
    const {userId, _} = JSON.parse(localStorage.getItem("user"));

    const response = await api.get("/user/groups",{ 
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            userId: userId
        }
    });
    return response
}