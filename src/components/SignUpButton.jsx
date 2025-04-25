import { Link } from "react-router-dom";

export default function SignUpButton() {
  return (
    <Link
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
      to="/adduser"
    >
      افزودن کاربر
    </Link>
  );
}
