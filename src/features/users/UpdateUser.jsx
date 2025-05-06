import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "./userSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";

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
    <div>
      <Form
        title="بروزرسانی کاربر"
        button="بروزرسانی"
        firstName={newFirstName}
        lastName={newLastName}
        nationalCode={newNationalCode}
        handleSubmit={handleSubmit}
        changefirstName={(e) => setNewFirstName(e.target.value)}
        changeLastName={(e) => setNewLastName(e.target.value)}
        changeNationalIdCode={(e) => setNewNationalCode(e.target.value)}
      />
     
    </div>
  );
}

export default UpdateUser;
