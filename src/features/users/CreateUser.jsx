import { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "./userSlice";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
//(e) => setFirstName(e.target.value)
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
    <div>
      <Form
        title="افزودن کاربر"
        button="ثبت کاربر"
        handleSubmit={handleSubmit}
        firstName={firstName}
        lastName={lastName}
        nationalCode={nationalCode}
        changefirstName={(e) => setFirstName(e.target.value)}
        changeLastName={(e) => setLastName(e.target.value)}
        changeNationalIdCode={(e) => setNationalCode(e.target.value)}
      />
    </div>
  );
}
