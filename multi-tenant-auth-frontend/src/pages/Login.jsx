import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email.includes("super")) {
      login({ name: "Super Admin", role: "SuperAdmin" }, "mockToken");
      navigate("/dashboard/super-admin");
    } else if (form.email.includes("admin")) {
      login({ name: "Tenant Admin", role: "Admin" }, "mockToken");
      navigate("/dashboard/admin");
    } else {
      login({ name: "User", role: "User" }, "mockToken");
      navigate("/dashboard/user");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between text-sm mt-4">
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Signup
          </Link>
          <Link to="/forgot-password" className="text-indigo-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}
