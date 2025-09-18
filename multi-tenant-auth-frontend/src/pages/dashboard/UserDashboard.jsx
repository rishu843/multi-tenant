import React from "react";
import UserLayout from "../../layouts/UserLayout";

export default function UserDashboard() {
  return (
    <UserLayout>
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <p className="text-gray-700">
        Welcome! Here’s your personal dashboard with tenant-specific data.
      </p>
    </UserLayout>
  );
}
