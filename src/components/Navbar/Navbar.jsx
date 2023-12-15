import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import Dropmenu from "../Extras/Dropdown/Dropdown";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase";
import { UserAuth } from "../../context/AuthContext";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const [loading , setLoading] = useState(false); 
  const [user, setUser] = useState([]);
  const { user: currentUser } = UserAuth();
  useEffect(() => {
    const fetch_data = async (e) => {
      // e.preventDefault();
      try {
        setLoading(true)
        if (currentUser && currentUser.email) {
          const q = query(
            collection(db, "user"),
            where("email", "==", currentUser.email)
          );
          console.log(user);
          const snapshot = await getDocs(q);
          const profile_data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUser(profile_data);
        }
      } catch (error) {
        console.log("error fetching", error);
      }
      finally{
        setLoading(false);
    }
    };
    fetch_data();
  }, [currentUser,user]);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img
            src="https://dev-myipr.p2eppl.com/static/media/ipr-logo-blue.d36167428cb98359a56a.webp"
            alt="company logo"
          />
        </div>
        <div className="navbar-right">
          <div className="right-credits">
            <img
              src="https://qa-myipr.p2eppl.com/static/media/creditIcon.ae7e1015bdf1a8dd8aff.webp"
              alt=""
            />
            <p>Credits: 954</p>
          </div>
          <div className="navbar-bell">
            <FaRegBell />
          </div>
          {user.map((item) => (

              // {loading && <img src="https://i.pinimg.com/222x/e7/1d/dd/e71ddd5f93978d86edeb2df6270936ba.jpg" alt="loading"/> }
              // {!loading && (
                <div className="profile-icon">
                <img src={item.image} alt="logo" srcset="" />
              <button onClick={toggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </button>
              {open && <Dropmenu />}
            </div>
            // )}
          ))}
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Navbar;
