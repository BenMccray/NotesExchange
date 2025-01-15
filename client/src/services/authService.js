import api from "./api";

export const loginUser = async (email, password) => {
    const response = await api.post("/auth/login", { email, password });
    return response;
}

export const registerUser = async (email, password) => {
    const response = await api.post('/auth/register', { email, password })
    return response;
}
