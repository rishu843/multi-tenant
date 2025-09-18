import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuthContext();

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        MultiTenantAuth
      </Link>

      {user ? (
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium">{user.name}</span>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="space-x-4">
          <Link
            to="/login"
            className="text-indigo-600 hover:underline font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}
