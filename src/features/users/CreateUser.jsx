import { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "./userSlice";
import { useNavigate } from "react-router-dom";

export default function CreateUserForm() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!firstName || !lastName || !nationalCode) return;

    dispatch(create(firstName, lastName, nationalCode));

    // Clear the form
    setFirstName("");
    setLastName("");
    setNationalCode("");
    navigate("/");
  }

  return (
    <div className="space-y-4 p-4 bg-white rounded-md shadow-md max-w-md mx-auto my-28">
      <h1 className="font-bold text-center text-2xl mb-8 mt-4">
        فرم افزودن کاربر
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="block text-sm font-medium mb-1">نام</label>
          <input
            className="w-full bg-gray-100 rounded-md px-3 py-2"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">نام خانوادگی</label>
          <input
            className="w-full bg-gray-100 rounded-md px-3 py-2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">کد ملی</label>
          <input
            className="w-full bg-gray-100 rounded-md px-3 py-2"
            value={nationalCode}
            onChange={(e) => setNationalCode(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700 transition-all"
        >
          ثبت کاربر
        </button>
      </form>
    </div>
  );
}
