import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    const user = localStorage.getItem("user");

    if (!jwtToken || !user) {
      // Redirect to login if either token or user is missing
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
    }
  }, [navigate]);
};

export default useAuthRedirect;
