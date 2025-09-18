import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuthContext();

  const links = {
    SuperAdmin: [
      { path: "/dashboard/super-admin", label: "Overview" },
      { path: "/dashboard/admin", label: "Manage Tenants" },
    ],
    Admin: [
      { path: "/dashboard/admin", label: "Tenant Users" },
      { path: "/dashboard/user", label: "My Tenant Data" },
    ],
    User: [{ path: "/dashboard/user", label: "My Dashboard" }],
  };

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4 space-y-4">
      <h2 className="text-lg font-bold">Menu</h2>
      <nav className="flex flex-col space-y-2">
        {user &&
          links[user.role]?.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:bg-gray-700 px-3 py-2 rounded"
            >
              {link.label}
            </Link>
          ))}
      </nav>
    </aside>
  );
}
