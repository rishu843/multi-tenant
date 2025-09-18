import React from "react";
import SuperAdminLayout from "../../layouts/SuperAdminLayout";

export default function SuperAdminDashboard() {
  return (
    <SuperAdminLayout>
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
      <p className="text-gray-700">
        Here you can view and manage all tenants across the system.
      </p>
    </SuperAdminLayout>
  );
}
