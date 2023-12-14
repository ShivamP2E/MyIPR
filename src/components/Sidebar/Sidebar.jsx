import {  NavLink } from "react-router-dom";
import "./Sidebar.css";
import React from "react";
// import Home from '../../Pages/Home/Home'
import { FiAlertCircle } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
        <NavLink to="/home">
            <li className="link-1">
            <GrHomeRounded />
              <p>Home</p>
            </li>
          </NavLink>
          <NavLink to="/profilepage">
            {" "}
            <li className="link-1">
              {" "}
              <FiUser />
              <p>User Profile</p>{" "}
            </li>
          </NavLink>

          {/* <NavLink to="/usermanagement">
            <li className="link-1">
              <FiUsers />
              <p>User Management</p>
            </li>
          </NavLink> */}
          <NavLink to="/usermanagement/joined">
            <li className="link-1">
              <FiUsers />
              <p>User Management</p>
            </li>
          </NavLink>
         
          <li className="link-3">
            {" "}
            <FiAlertCircle /> <p>Help and support</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
