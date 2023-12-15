import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase";

import "./Modal.css";

const UserModal = ({ onCloseModal }) => {

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [close, setClose] = useState(false);
  const [status] = useState("Pending")
  const [role]= useState("Staff")
  
  // const openModal = () => {
  //   setClose(false);
  // };
  const closeModal = () => {
    setClose(true);
    onCloseModal();
  };
  if (close) {
    return null;
  }
  
  // adding data to data base

  const formHandler = async (e) => {
    e.preventDefault();
    if (!fname || !lname || !email) {
      alert("Please fill out all required fields.");
      return;
    }
    try {
      const submitDataCollection = collection(db, "inviteduser");
      await addDoc(submitDataCollection, {
        firstname: fname,
        lastname: lname,  
        email: email,
        status:status,
        role:role,
        dateIssued: new Date().toISOString().split('T')[0]
      });
      alert("Data added in database successfully");
      
    } catch (error) {}
    console.log()
  };
  console.log(formHandler)




  return (
    <div className="invite-modal-layout">
      <div className="invite-user">
        <h1>Invite User</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="12"
          viewBox="0 0 384 512"
          onClick={closeModal}
          style={{ cursor: "pointer" }}
        >
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
        </svg>
      </div>
      <form>
        <div className="form-name">
          <div className="form-first-name">
            <p> First Name </p>
            <input type="text" placeholder="First name"
             onChange={(e) => setFName(e.target.value)}
             required />
          </div>
          <div className="form-last-name">
            <p> Last Name </p>
            <input type="text" 
            placeholder="Last name"
            onChange={(e) => setLName(e.target.value)}
            required
             />
          </div>
        </div>
        <div className="form-email">
          <p> Email</p>
          <input type="text" placeholder="Enter your email or username"
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
      </form>
      <div className="invite-user-buttons">
        <button type="cancel" onClick={closeModal} className="cancel-button">
          Cancel
        </button>
        <button type="submit" className="sendinvite" onClick={formHandler}>
          Send Invite
        </button>
      </div>
    </div>
  );
};

export default UserModal;
