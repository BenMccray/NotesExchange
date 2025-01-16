import api from "./api";

export const loginUser = async (email, password) => {
    const response = await api.post("/auth/login", { 
        email: email, 
        password: password });
    return response;
}

export const registerUser = async (displayName, email, password) => {
    const response = await api.post('/auth/register', { 
        displayName: displayName,
        email: email,
        password: password })
    return response;
}
