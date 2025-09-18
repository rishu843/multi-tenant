import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link sent to " + email);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-yellow-100 to-orange-200">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Remembered?{" "}
          <Link to="/login" className="text-yellow-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
