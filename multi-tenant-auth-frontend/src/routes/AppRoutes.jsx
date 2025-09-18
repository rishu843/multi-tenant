import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import SuperAdminDashboard from "../pages/dashboard/SuperAdminDashboard";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import UserDashboard from "../pages/dashboard/UserDashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuthContext } from "../context/AuthContext";

export default function AppRoutes() {
  const { user } = useAuthContext();

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected routes */}
      <Route
        path="/dashboard/super-admin"
        element={
          <ProtectedRoute allowedRoles={["SuperAdmin"]}>
            <SuperAdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/admin"
        element={
          <ProtectedRoute allowedRoles={["Admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/user"
        element={
          <ProtectedRoute allowedRoles={["User"]}>
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      {/* Redirect root → correct dashboard if logged in */}
      <Route
        path="/"
        element={
          user ? (
            user.role === "SuperAdmin" ? (
              <Navigate to="/dashboard/super-admin" replace />
            ) : user.role === "Admin" ? (
              <Navigate to="/dashboard/admin" replace />
            ) : (
              <Navigate to="/dashboard/user" replace />
            )
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
