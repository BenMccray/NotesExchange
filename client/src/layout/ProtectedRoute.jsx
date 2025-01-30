import React from 'react'
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem("jwtToken");
    const user = localStorage.getItem("user");
    if (!token || !user) {
        return <Navigate to="/Login" replace/>
    }
  return children;
}

export default ProtectedRoute