import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "./userSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();
  const users = useSelector((state) => state.user);
  const existingUser = users.filter((f) => f.id === id);
 
  
  const { firstName, lastName, nationalCode } = existingUser[0];
  const dispatch = useDispatch();
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newNationalCode, setNewNationalCode] = useState(nationalCode);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!newFirstName || !newLastName || !newNationalCode) return;
    dispatch(
      update({
        id: id,
        firstName: newFirstName,
        lastName: newLastName,
        nationalCode: newNationalCode,
      })
    );
    navigate("/");
  }
  return (
    <div className="space-y-4 p-4 bg-white rounded-md shadow-md max-w-md mx-auto my-28">
      <h1 className="font-bold text-center text-2xl mb-8 mt-4">
        بروزرسانی کاربر
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="block text-sm font-medium mb-1">نام</label>
          <input
            className="w-full bg-gray-100 rounded-md px-3 py-2"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">نام خانوادگی</label>
          <input
            className="w-full bg-gray-100 rounded-md px-3 py-2"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">کد ملی</label>
          <input
            className="w-full bg-gray-100 rounded-md px-3 py-2"
            value={newNationalCode}
            onChange={(e) => setNewNationalCode(e.target.value)}
            required
          />
        </div>
        <div className="space-x-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700 transition-all"
          >
            بروزرسانی کاربر
          </button>
          <Link
            className="bg-gray-100 text-black px-4 py-2 mt-2 rounded-md hover:bg-gray-200 transition-all"
            to="/"
          >
            بازگشت
          </Link>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
