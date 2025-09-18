import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-700">
        Here you can manage users and data for your assigned tenant.
      </p>
    </AdminLayout>
  );
}
