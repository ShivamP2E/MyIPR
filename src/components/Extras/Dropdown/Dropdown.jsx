import React from "react";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router";
import "./Dropdown.css";
import { FiUser } from "react-icons/fi";

const Dropmenu = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="dropDownProfile">
      <ul>
        <li>
          <FiUser /> : {user && user.email}
        </li>
        <li className="li-style" onClick={handleLogout}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Dropmenu;
