import { FilterIcon } from "lucide-react";
import { useTable } from "../contexts/TableContext";
import SearchBar from "./SearchBar";
import SignUpButton from "./SignUpButton";
import Filtersection from "./Filtersection";

export default function UpperSection() {
  const { users, isOpen, handleOpen } = useTable();
  return (
    <div className="flex my-4 items-center justify-between">
      <div className="flex gap-2 items-center">
        <SearchBar />
        <button onClick={handleOpen}>
          <FilterIcon />
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <Filtersection />
          </div>
        )}
      </div>
      <div className="flex justify-between items-center gap-2">
        <p className="font-bold">{`تعداد کاربر${users.length}`}</p>
        <SignUpButton />
      </div>
    </div>
  );
}
