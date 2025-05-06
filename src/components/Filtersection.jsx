import React from "react";
import { useTable } from "../contexts/TableContext";
import DropdownFilter from "./DropdownFilter";
export default function Filtersection() {
  const { handlUserType, handleUserSystem, handleOpen,userTypeFilter, userSystemFilter } = useTable();
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full space-y-3 mx-4">
      <h2 className="text-xl text-gray-600 pb-2 font-bold border-b">
        فیلتر کاربران
      </h2>
      <label className="px-2 mb-2">نوع کاربر</label>
      <DropdownFilter>
        <select name="نوع کاربر" id="type-selection" onChange={handlUserType} value={userTypeFilter}>
          <option value="">همه</option>
          <option value="0">شهروند</option>
          <option value="1">سازمانی</option>
        </select>
      </DropdownFilter>
      <label className="px-2 mb-2">سامانه </label>

      <DropdownFilter>
        <select
          name="سامانه ها"
          id="system-selection"
          onChange={handleUserSystem}
          value={userSystemFilter}
        >
          <option value="">همه</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </DropdownFilter>
      <button onClick={handleOpen} className="bg-gray-200 rounded-md px-4 py-2">
        بستن
      </button>
    </div>
  );
}
