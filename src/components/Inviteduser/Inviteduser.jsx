import React, { useState, useEffect } from "react";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../../Firebase";
import './InvitedUser.css'




const Inviteduser = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  // pagination
  const [currrentPage, setCurrrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(false); // changing the status of the user
  const [loading, setLoading] = useState(false);
 
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetch_data = async () => {
      try {
        setLoading(true)
        const profile_collection = collection(db, "inviteduser");
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
      finally{
        setLoading(false)
      }
    };
    fetch_data();
  }, [status]);

  const indexOfLastItem = currrentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currrentItem = user.slice(indexOfFirstItem, indexOfLastItem);
  const pagination = (pageNumber) => setCurrrentPage(pageNumber);
  return (
    <div>
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
                
          </div>
          {loading && (
            <img
              src="https://dev-myipr.p2eppl.com/static/media/no-recent-files.b9b58a7e1ef3eec7e3aeca9ff90e57a9.svg" alt="logo"
              className="loading-table-invite"
            ></img>
          )}

          {!loading && (
          <>
          <table>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Date</th>
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
                            {item.firstname} {item.lastname}
                            <br />
                            <p className="email-style">{item.email}</p>
                          </td>
                          <td>{item.role}</td>
                          <td>{item.dateIssued}</td>
                          <td className="active-style">
                            <p
                              className='status-style'
                                // item.status == "Inactive"
                                //   ? "inactive-class"
                                //   : "active-class"
                            >
                              {item.status}
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
              </>
          )}
    </div>
  )
}

export default Inviteduser