import React from "react";

function DropdownFilter({ children }) {
  return (
    <div className="px-3 py-2 flex items-center border border-gray-300 rounded-xl shadow-sm overflow-hidden p-1 bg-white max-w-md mx-auto">
      {children}
    </div>
  );
}

export default DropdownFilter;
