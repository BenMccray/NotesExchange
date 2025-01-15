import api from "./api";

export const getUserGroups = async (user) => {
    const token = localStorage.getItem("jwtSecret");
    const response = await api.get("/user/groups",{ 
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response
}