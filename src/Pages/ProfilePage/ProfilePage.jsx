import { useState } from "react";
import "./ProfilePage.css";
// import { useNavigate } from 'react-router'
// import Home from '../Home/Home'
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
// import { UserAuth } from '../../context/AuthContext'
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../Firebase";
import { UserAuth } from "../../context/AuthContext";
// import { async } from '@firebase/util'
import { FaRegEdit } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { MdVerified } from "react-icons/md";

const ProfilePage = () => {
  const [user, setUser] = useState([]);
  const { user: currentUser } = UserAuth();
  const [updateUsername, setUpdateUsername] = useState("");
  const [updateFirstName, setUpdateFirstName] = useState("");
  const [updateLastName, setUpdateLastName] = useState("");
  const [updateCompany, setUpdateCompany] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const updateUserRef = doc(db, "user", user[0].id);
      const updatedFields = {};
     
      if (updateUsername !== "" && updateUsername !== user[0].username) {
        updatedFields.username = updateUsername;
      }

      if (updateFirstName !== "" && updateFirstName !== user[0].firstname) {
        updatedFields.firstname = updateFirstName;
      }

      if (updateLastName !== "" && updateLastName !== user[0].lastname) {
        updatedFields.lastname = updateLastName;
      }

      if (updateCompany !== "" && updateCompany !== user[0].company) {
        updatedFields.company = updateCompany;
      }

      if (Object.keys(updatedFields).length > 0) {
        // Only update the document if there are modified fields
        await updateDoc(updateUserRef, updatedFields);
        console.log("Profile updated successfully!");

        // Update the local state with the new data
        setUser((prevUser) => {
          const updatedUser = prevUser.map((item) => ({
            ...item,
            ...updatedFields,
          }));
          return updatedUser;
        });

        setIsButtonDisabled(true);
        setTimeout(() => {
          setIsButtonDisabled(false);
        }, 8000);
      } else {
        console.log("No fields were modified.");
        setIsButtonDisabled(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetch_data = async () => {
      try {
        if (currentUser && currentUser.email) {
          const q = query(
            collection(db, "user"),
            where("email", "==", currentUser.email)
          );
          const snapshot = await getDocs(q);
          const profile_data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUser(profile_data);
          setUpdateUsername(profile_data[0].username);
          setIsButtonDisabled(!profile_data[0].username);
        }
      } catch (error) {
        console.error("Error fetching", error);
        setError("Unable to fetch data");
      }
    };

    fetch_data();
  }, [currentUser]);

  return (
    <div className="layout">
      <div className="profile-layout-nav">
        <Navbar />
      </div>
      <div className="profile-main">
        <div className="profile-main-content">
          <Sidebar />
        </div>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && (
          <div className="profile-right">
            <div className="profilepage">
              <div className="profilepage-back">
                <Link to="/home">Back</Link>
              </div>

              <div className="profilepage-main">
                <div className="profilepage-heading">
                  <h1>
                    Profile Info{" "}
                    <span className="profile-icon-svg">
                      <FiInfo />
                    </span>
                  </h1>
                  <p> Manage your personal information</p>
                </div>

                {user.map((item) => (
                  <>
                    <div className="profilepage-upload">
                      <div className="profilepage-photo">
                        <img src={item.image} alt="" width={50} height={50} />
                      </div>
                      <div className="profilepage-fileformat">
                        <div className="fileformat-button">
                          {/* <input type="file" id="myFile" name="filename"/> */}
                          <h3>
                            {item.firstname} {item.lastname}
                          </h3>
                        </div>
                        <div className="fileformat">
                          {/* <p>JPG, JPEG, PNG, Max Size: <b>2MB</b></p> */}
                          <p>{item.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* <hr /> */}
                    <div className="profilepage-about">
                      <h1>
                        About you{" "}
                        <span className="edit-icon">
                          <FaRegEdit />
                        </span>
                      </h1>

                      <div className="about-name">
                        <div className="about-first">
                          <p>First Name</p>
                          <input
                            type="text"
                            defaultValue={item.firstname}
                            onChange={(e) => setUpdateFirstName(e.target.value)}
                          />
                        </div>
                          <div className="about-last">
                            <p>Last Name</p>
                            <input
                            type="text"
                            defaultValue={item.lastname} 
                            onChange={(e) => setUpdateLastName(e.target.value)} />
                            </div>



                      </div>
                      <div className="about-username">
                        <div className="about-user">
                          <p>Username</p>
                          <input
                            type="text"
                            defaultValue={item.username}
                            onChange={(e) => setUpdateUsername(e.target.value)}
                          />
                        </div>
                        <div className="about-email">
                          <p>Email Address</p>
                          <input type="text" value={item.email} disabled />
                        </div>
                      </div>
                      <div className="about-company">
                        <p>Company Name</p>
                        <input
                          type="text"
                          defaultValue={item.company}
                          onChange={(e) => setUpdateCompany(e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                ))}

                <div className="profilepage-kyb">
                  <h1>
                    KYB Status{" "}
                    <span className="kyc-icon">
                      {" "}
                      <MdOutlineVerifiedUser />
                    </span>
                  </h1>
                  <div className="kybwrap">
                    <div className="kyb-sction">
                      <MdVerified />{" "}
                    </div>
                    <div className="kyb-content">
                      <p> Your account is KYB verified.</p>
                    </div>
                  </div>
                </div>

                <div className="update-button">
                  <button
                    onClick={updateProfileHandler}
                    disabled={isButtonDisabled}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
