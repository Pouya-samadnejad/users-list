import Active from "./Active";
import Deactive from "./Deactive";
import TypeOfUser from "./TypeOfUser";
import Pagination from "./Pagination";
import { Edit2, Trash2 } from "lucide-react";
import { useTable } from "../contexts/TableContext";
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/users/userSlice";
import { Link } from "react-router-dom";
const USERS_PER_PAGE = 5;

export default function PaginatedTable() {
  const { currentUsers, searchTerm, userTypeFilter, userSystemFilter } =
    useTable();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-xl shadow-sm mb-4">
        <table className="min-w-full text-sm text-right">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="p-3">ردیف</th>
              <th className="p-3">نام نام خانوادگی</th>
              <th className="p-3">کدملی</th>
              <th className="p-3">موبایل</th>
              <th className="p-3">وضعیت کاربران</th>
              <th className="p-3">ورود دو مرحله‌ای</th>
              <th className="p-3">نوع کاربر</th>
              <th className="p-3">سامانه ها</th>
              <th className="p-3 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers
              .filter((user) => {
                const fullName = `${user.firstName} ${user.lastName}`;
                const matchesSearch = fullName.includes(searchTerm);
                const matchUserType =
                  userTypeFilter === "" || user.type === userTypeFilter;
                const matchUserSystem =
                  userSystemFilter === "" ||
                  user.systems.includes(Number(userSystemFilter));

                return matchesSearch && matchUserType && matchUserSystem;
              })
              .map((user) => (
                <tr
                  key={user.id}
                  className="even:bg-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="p-3">{user.id}</td>
                  <td className="p-3 ">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="p-3 justify-center">{user.nationalCode}</td>
                  <td className="p-3 justify-center">{user.mobile}</td>
                  <td className="p-3 justify-center">
                    {user.status === 1 ? <Active /> : <Deactive />}
                  </td>
                  <td className="p-3 justify-center">
                    {user.twoFactorEnabled ? <Active /> : <Deactive />}
                  </td>
                  <td className="p-3 justify-center">
                    {user.type === 1 ? (
                      <TypeOfUser>سازمانی</TypeOfUser>
                    ) : (
                      <TypeOfUser>شهروند</TypeOfUser>
                    )}
                  </td>
                  <td className="p-3 justify-center">{user.systems}</td>

                  <td className="p-3 flex justify-center gap-2 text-gray-700">
                    <button onClick={() => handleDelete(user.id)}>
                      <Trash2 className="text-red-600 cursor-pointer" />
                    </button>
                    <Link to={`/editeuser/${user.id}`}>
                      <Edit2 className="cursor-pointer" />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}
