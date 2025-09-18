import React from "react";

export default function FormInput({ label, type, value, onChange, ...props }) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        {...props}
      />
    </div>
  );
}
