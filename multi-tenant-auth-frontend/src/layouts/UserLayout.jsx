import React from "react";
import Navbar from "../components/Navbar";

export default function UserLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-6">{children}</main>
    </div>
  );
}
