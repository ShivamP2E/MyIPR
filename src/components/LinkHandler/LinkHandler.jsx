import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./LinkHandler.css";
import { FiUsers } from "react-icons/fi";
import { PiArrowUUpRightBold } from "react-icons/pi";
import UserModal from "../Extras/Modal/UserModal";
const LinkHandler = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const InviteHandler = () => {
        setIsModalOpen(!isModalOpen);
      };
      const closeModal = () => {
        setIsModalOpen(false);
      };
  return (
    <>
     <div className={`layout  ${isModalOpen ? "blur-background" : ""}`}>
      <div className="user-role">
        <h1>User Role & Permissions</h1>
        <button type="button" 
         onClick={InviteHandler}
        >
          + Invite User
        </button>
      </div>
      <div className="user-container">
        <div className="joined-user">
          <FiUsers />
       <NavLink to='joined' activeClassName="active-link" ><p >View Joined Users</p></NavLink> 
        </div>
        <div className="invited-user">
          <PiArrowUUpRightBold />
        <NavLink to='invited' activeClassName="active-link"> <p>View Invited User</p></NavLink> 
        </div>
      </div>
      <div className="current-user">
        <Outlet/>
      </div>
      </div>
      {isModalOpen && <UserModal onCloseModal={closeModal} />}
    </>
  );
};

export default LinkHandler;
