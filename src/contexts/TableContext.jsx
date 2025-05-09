import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
const TableContext = createContext();

function TableProvider({ children }) {
  const users = useSelector((state) => state.user);
  const [numTable, setNumTable] = useState(() => {
    const saved = localStorage.getItem("numTable");
    return saved !== null ? parseInt(saved, 10) : 5;
  });
  const [pageParams, setPageParams] = useSearchParams();
  const page = Number(pageParams.get("page") || 1);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("fullname") || "";
  const [userTypeFilter, setUserTypeFilter] = useState(() => {
    const saved = localStorage.getItem("userTypeFilter");
    return saved !== null ? parseInt(saved, 10) : "";
  });

  const [userSystemFilter, setUserSystemFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("numTable", numTable);
  }, [numTable]);

  useEffect(() => {
    if (userTypeFilter !== "") {
      localStorage.setItem("userTypeFilter", userTypeFilter.toString());
    } else {
      localStorage.removeItem("userTypeFilter");
    }
  }, [userTypeFilter]);

  const USERS_PER_PAGE = numTable;

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
    if (page < totalPages) {
      pageParams.set("page", page + 1);
      setPageParams(pageParams);
    }
  }
  function handlePreviousPage() {
    if (page > 1) {
      pageParams.set("page", page - 1);
      setPageParams(pageParams);
    }
  }
  function handleSetPage(p) {
    if (page >= 1 && page <= totalPages) {
      const params = new URLSearchParams(pageParams.toString());
      params.set("page", p);
      setPageParams(params);
    }
  }
  function handleInputChange(e) {
    const value = e.target.value;
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (value) {
        params.set("fullname", value);
      } else {
        params.delete("fullname");
      }
      return params;
    });
  }

  function handleNumTable(e) {
    setNumTable(e.target.value === "" ? 5 : Number(e.target.value));
  }

  function handlUserType(e) {
    setUserTypeFilter(e.target.value === "" ? "" : Number(e.target.value));
  }
  function handleUserSystem(e) {
    setUserSystemFilter(Number(e.target.value));
  }
  const currentUser = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    const matchesSearch = fullName.includes(searchTerm);
    const matchUserType = userTypeFilter === "" || user.type === userTypeFilter;
    const matchUserSystem =
      userSystemFilter === "" ||
      user.systems.includes(Number(userSystemFilter));
    return matchUserSystem && matchesSearch && matchUserType;
  });

  return (
    <TableContext.Provider
      value={{
        page,
        totalPages,
        currentUsers,
        handleNextPage,
        handlePreviousPage,
        handleSetPage,
        handleInputChange,
        searchTerm,
        handlUserType,
        userTypeFilter,
        handleUserSystem,
        userSystemFilter,
        users,
        isOpen,
        handleOpen,
        currentUser,
        handleNumTable,
        numTable,
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
