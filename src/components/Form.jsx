import React from "react";
import { Link } from "react-router-dom";

function Form({
  title,
  button,
  handleSubmit,
  firstName,
  lastName,
  nationalCode,
  changefirstName,
  changeLastName,
  changeNationalIdCode,
}) {
  return (
    <div className="space-y-4 p-4 bg-white rounded-md shadow-md max-w-md mx-auto my-28">
      <h1 className="font-bold text-center text-2xl mb-8 mt-4">{title} </h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="block text-sm font-medium mb-1">نام</label>
          <input
            className="w-full bg-gray-100 rounded-md px-3 py-2"
            value={firstName}
            onChange={changefirstName}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">نام خانوادگی</label>
          <input
            className="w-full bg-gray-100 rounded-md px-3 py-2"
            value={lastName}
            onChange={changeLastName}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">کد ملی</label>
          <input
            className="w-full bg-gray-100 rounded-md px-3 py-2"
            value={nationalCode}
            onChange={changeNationalIdCode}
            required
          />
        </div>

        <div className="space-x-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700 transition-all"
          >
            {button}
          </button>
          <Link
            className="bg-gray-100 text-black px-4 py-3 mt-2 rounded-md hover:bg-gray-200 transition-all"
            to="/"
          >
            بازگشت
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Form;
