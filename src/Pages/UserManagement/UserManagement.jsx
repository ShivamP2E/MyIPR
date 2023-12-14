import "./UserManagement.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { PiArrowUUpRightBold } from "react-icons/pi";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
// import Dropdown2 from "../../components/Extras/Dropdown2/Dropdown2";
import StatusDropdown from "../../components/Extras/StatusDropdown/StatusDropdown";
import UserModal from "../../components/Extras/Modal/UserModal";
import { FiUsers } from "react-icons/fi";

const UserManagement = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  // pagination
  const [currrentPage, setCurrrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(false); // changing the status of the user

  //status filter dropdown
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  //Status dropwdown
  const [statusActive, setStatusActive] = useState({});
  const toggleStatus = (userId) => {
    setStatusActive((prevStatus) => {
      const updatedStatus = {};

      Object.keys(prevStatus).forEach((id) => {
        updatedStatus[id] = false;
      });

      // Open the clicked dropdown
      updatedStatus[userId] = !prevStatus[userId] ? "active" : "inactive";
      updatedStatus[userId] = !prevStatus[userId];
      return updatedStatus;
    });
  };
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetch_data = async () => {
      try {
        const profile_collection = collection(db, "user");
        const snapshot = await getDocs(profile_collection);
        const profile_data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUser(profile_data);
        setTotalItems(profile_data.length);
        setStatus(false);
      } catch (error) {
        console.error("error fetching", error);
      }
    };
    fetch_data();
  }, [status]);

  const indexOfLastItem = currrentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currrentItem = user.slice(indexOfFirstItem, indexOfLastItem);
  const pagination = (pageNumber) => setCurrrentPage(pageNumber);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const InviteHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // const cancelhandler = (e) =>{
  //   e.stopPropagation();
  //   setIsModalOpen(!isModalOpen)
  // }
  const clearFilter = () => {
    setSelectedStatus(null);
    setSearch("");
  };

  

  return (
    <>
      <div className={`layout  ${isModalOpen ? "blur-background" : ""}`}>
        <div className="user-layout-nav">
          <Navbar />
        </div>
        <div className="user-main-content">
          <div className="user-left">
            <Sidebar />
          </div>
          <div className="user-right">
            {/* // onClick={cancelhandler} */}
            {isModalOpen && <div className="backdrop"></div>}
            <div className="user-right-wrapper">
              <div className="user-role">
                <h1>User Role & Permissions</h1>
                <button type="button" onClick={InviteHandler}>
                  + Invite User
                </button>
              </div>
              <div className="user-container">
                <div className="joined-user">
                  <FiUsers />
                  <p>View Joined Users</p>
                </div>
                <div className="invited-user">
                  <PiArrowUUpRightBold />
                  <p>View Invited User</p>
                </div>
              </div>
              <div className="user-search-status">
                <div className="search-container">
                  <div className="search-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                  </div>
                  <div className="search-input">
                    <input
                      type="text"
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search user"
                    />
                  </div>
                </div>
                <div className="status-container">
                  {/* <button type="button" onClick={toggle}>
                    Status
                  </button>
                  {open && (
                    <Dropdown2
                      onSelect={(status) => setSelectedStatus(status)}
                    />
                  )} */}
                  <div className="status-button">
                    <button
                      type="button"
                      className="active-button"
                      onClick={() => setSelectedStatus("Active")}
                    >
                      Active
                    </button>
                    <button
                      type="button"
                      className="inactive-button"
                      onClick={() => setSelectedStatus("Inactive")}
                    >
                      Inactive
                    </button>
                  </div>
                  <button 
                  className="clear-button" 
                  type="button"
                  onClick={clearFilter}
                  >
                    Clear Filter
                  </button>
                </div>
              </div>
             
              <table>
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Company</th>
                    <th>Role</th>
                    <th style={{ textAlign: "center" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {search.toLowerCase() === "" && currrentItem.length === 0 ? (
                    <tr>
                      <td colSpan={5}>No Record found</td>
                    </tr>
                  ) : (
                    user
                      .filter((item) => {
                        return (
                          (search.toLowerCase() === "" ||
                            item.firstname.toLowerCase().includes(search)) &&
                          (!selectedStatus || item.status === selectedStatus)
                        );
                      })
                      .slice(indexOfFirstItem, indexOfLastItem)
                      .map((item) => (
                        <tr className="row-style" key={item.id}>
                          <td>
                            {item.username}
                            <br />
                            <p className="email-style">{item.email}</p>
                          </td>
                          <td>{item.company}</td>
                          <td>{item.role}</td>
                          <td className="active-style">
                            <p
                              className={
                                item.status == "Inactive"
                                  ? "inactive-class"
                                  : "active-class"
                              }
                              // style={
                              //   item.status == "Inactive"
                              //     ?{  color: "red" }
                              //     : { color: "green" }
                              // }
                              onClick={() => toggleStatus(item.id)}
                            >
                              {item.status}{" "}
                              {statusActive[item.id] && (
                                <StatusDropdown
                                  userId={item.id}
                                  statusAction={setStatus}
                                />
                              )}
                            </p>
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
              <div className="pagination">
                <div className="pageInformation">
                  <span>
                    Showing {indexOfFirstItem + 1} of{" "}
                    {Math.min(indexOfLastItem, totalItems)} out of {totalItems}{" "}
                  </span>
                </div>
                <div className="pageNumber">
                  {Array.from(
                    { length: Math.ceil(totalItems / itemPerPage) },
                    (_, i) => i + 1
                  ).map((pageNumber) => (
                    <span
                      key={pageNumber}
                      onClick={() => pagination(pageNumber)}
                      className={currrentPage === pageNumber ? "active" : ""}
                    >
                      {" "}
                      {pageNumber}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <UserModal onCloseModal={closeModal} />}
    </>
  );
};

export default UserManagement;
