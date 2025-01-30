
export default function cacheValidAuth(jwtToken, user) {
    localStorage.setItem("jwtToken", jwtToken);
    localStorage.setItem("user", user);
}