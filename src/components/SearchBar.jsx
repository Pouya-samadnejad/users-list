import { Search } from "lucide-react"; // Using lucide-react for the icon
import { useTable } from "../contexts/TableContext";
export default function SearchBar() {
  const { searchTerm, handleInputChange, handleSearch } = useTable();
  return (
    <div className="flex items-center border border-gray-300 rounded-xl shadow-sm overflow-hidden p-1 bg-white max-w-md mx-auto">
      <div className="flex items-center flex-grow pr-2">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="جستجو ..."
          value={searchTerm}
          onChange={handleInputChange}
          className="flex-grow px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
          aria-label="Enter search term" // Accessibility label
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex-shrink-0"
        aria-label="جستجو" // Accessibility label
      >
        جستجو
      </button>
    </div>
  );
}
