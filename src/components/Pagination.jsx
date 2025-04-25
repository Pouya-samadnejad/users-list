import { ChevronRight, ChevronLeft } from "lucide-react";
import { useTable } from "../contexts/TableContext";
export default function Pagination() {
  const {
    page,
    totalPages,
    handleNextPage,
    handlePreviousPage,
    handleSetPage,
  } = useTable();

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={handlePreviousPage}
        className="p-2 rounded-md border disabled:opacity-50"
        disabled={page === 1}
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => handleSetPage(p)}
          className={`w-8 h-8 rounded-md  text-sm ${
            page === p ? "border-blue-500 text-blue-500" : "text-gray-700"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={handleNextPage}
        className="p-2 rounded-md border disabled:opacity-50"
        disabled={page === totalPages}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
    </div>
  );
}
