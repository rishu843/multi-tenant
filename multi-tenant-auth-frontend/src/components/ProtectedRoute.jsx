import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuthContext();

  // Not logged in → send to login
  if (!user) return <Navigate to="/login" replace />;

  // Logged in but role not allowed → redirect them to their dashboard
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    switch (user.role) {
      case "SuperAdmin":
        return <Navigate to="/dashboard/super-admin" replace />;
      case "Admin":
        return <Navigate to="/dashboard/admin" replace />;
      case "User":
        return <Navigate to="/dashboard/user" replace />;
      default:
        return <Navigate to="/login" replace />;
    }
  }

  // Role allowed → render children
  return children;
}
