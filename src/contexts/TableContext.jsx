import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
const USERS_PER_PAGE = 5;

const TableContext = createContext();

function TableProvider({ children }) {
  const users = useSelector((state) => state.user);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [userTypeFilter, setUserTypeFilter] = useState(() => {
    const saved = localStorage.getItem("userTypeFilter");
    return saved !== null ? parseInt(saved, 10) : "";
  });

  const [userSystemFilter, setUserSystemFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (userTypeFilter !== "") {
      localStorage.setItem("userTypeFilter", userTypeFilter.toString());
    } else {
      localStorage.removeItem("userTypeFilter");
    }
  }, [userTypeFilter]);

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  console.log(users);
  const currentUsers = users.slice(
    (page - 1) * USERS_PER_PAGE,
    page * USERS_PER_PAGE
  );
  function handleOpen() {
    setIsOpen((opn) => !opn);
  }
  function handleNextPage() {
    setPage((p) => Math.min(p + 1, totalPages));
  }
  function handlePreviousPage() {
    setPage((p) => Math.max(p - 1, 1));
  }
  function handleSetPage(p) {
    setPage(p);
  }
  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }
  function handleSearch(event) {
    event.preventDefault(); // Prevent default form submission if used in a form
  }

  function handlUserType(e) {
    setUserTypeFilter(e.target.value === "" ? "" : Number(e.target.value));
  }
  function handleUserSystem(e) {
    setUserSystemFilter(Number(e.target.value));
  }

  return (
    <TableContext.Provider
      value={{
        page,
        setPage,
        totalPages,
        currentUsers,
        handleNextPage,
        handlePreviousPage,
        handleSetPage,
        handleInputChange,
        handleSearch,
        searchTerm,
        handlUserType,
        userTypeFilter,
        handleUserSystem,
        userSystemFilter,
        users,
        isOpen,
        handleOpen,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

function useTable() {
  const context = useContext(TableContext);
  return context;
}

export { TableProvider, useTable };
