import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router";
import "./Dropdown.css";
import { FiUser } from "react-icons/fi";
import {collection,getDocs} from "firebase/firestore";
import { db } from "../../../Firebase";
import React, { useEffect,useState } from "react";

const Dropmenu = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const { user: currentUser } = UserAuth();
  const [userinfo, setUserInfo] = useState([]);


  useEffect(() => {
    const fetch_data = async () => {
      try {
        // if(currentUser && currentUser.email){
        //     const q = query(collection(db, "user"),
        //       where("email", "==", currentUser.email)
        //     );
   
        const profile_collection = collection(collection(db, "user"));
        const snapshot = await getDocs(profile_collection);
        const profile_data = snapshot.docs.map((doc) => ({
          id: doc.id,
          username: doc.data().username,
          image: doc.data().image,
          ...doc.data(),
        }));
        setUserInfo(profile_data);
      // }
      } catch (error) {
        console.error("error fetching", error);
      }
    };
    fetch_data();
  }, [currentUser]);

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
        {userinfo.map((item) => (
        <li key={item.id}><img src={item.image} alt="User Avatar" />{item.username}</li>
          ))}
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
