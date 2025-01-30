
export default function useUserCache() {
    const user = localStorage.getItem("user");

    const {userId, userEmail, displayName} = JSON.parse(user);

    return {userId, userEmail, displayName};
}


