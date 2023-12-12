import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase";

const SignUp = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [username, setUserName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole]= useState("Staff");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const submitDataCollection = collection(db, "user");
      await addDoc(submitDataCollection, {
        firstname: fname,
        lastname: lname,
        username: username,
        company: companyName,
        email: email,
        password: password,
        role: role,
      });
      alert("Data added in database successfully");
    } catch (error) {}
  };

  return (
    <div className="signin">
      <div className="signin-left">
        <img
          src="https:dev-myipr.p2eppl.com/static/media/sidebar.109d47a6c585553fa6c8.png"
          alt=""
          srcset=""
        />
        <div className="signin-logo">
          <img
            src="	https:dev-myipr.p2eppl.com/static/media/ipr-scanner.b936b6af536155305b3356783c988784.svg"
            alt=""
            srcset=""
          />
        </div>
        <div className="signin-left-content">
          <div className="content-head">
            <p>
              <strong>Protect, manage</strong> and <br />
              <strong>monetise</strong> your creation,
              <br />
              <em>affordably</em> and <em>seamlessly</em>
            </p>
          </div>
          <div className="content-foot">
            <p>
              MyIPR provides end-to-end intellectual property management. Signup
              today!
            </p>
          </div>
        </div>
      </div>
      <form onSubmit={submitHandler} className="signin-right">
        <div className="signin-form">
          <div className="form-head">
            <h1>Welcome to MyIPR</h1>
            <p>
              Already have an account ?{" "}
              <span>
                <Link to="/">Login</Link>
              </span>
            </p>
          </div>
          <div className="form-name">
            <div className="form-first-name">
              <p> First Name </p>
              <input
                type="text"
                placeholder="First name"
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className="form-last-name">
              <p> Last Name </p>
              <input
                type="text"
                placeholder="Last name"
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-username">
            <p> Username </p>
            <input
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-company">
            <p>Company Name</p>
            <input
              type="text"
              placeholder="Enter your company name"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="form-email">
            <p> Email</p>
            <input
              type="text"
              placeholder="Enter your email or username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-password">
            <p>Password</p>
            <input type="password" placeholder="Enter your password" 
             onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="form-forgot">
                  <a href="http:myipr.io" target="_blank" rel="noopener noreferrer">Forgot Password?</a>
                </div> */}
          <div className="form-button">
            <p className="error-style"></p>
            <button type="submit">Sign-up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

//  import React, { useState } from 'react'
//  import './SignIn.css'
//  import { Link, useNavigate } from 'react-router-dom'
//  import { UserAuth } from '../../context/AuthContext'

//  const SignUp = () => {
//      const db = UserAuth();
//    const [values, setValues] = useState({
//      firstname: "",
//      lastname: "",
//      username: "",
//      email: "",
//      password: "",

//    })
//    const [errorMessage, setErrorMessage] = useState("");
//    const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, setError] = useState('')

//   const {createUser} = UserAuth()
//   const navigate = useNavigate()
//     const handleSubmit = async (e) => {
//       e.preventDefault()
//       setError('')
//       try{
//         await createUser(email, password)
//         navigate('/profilepage')
//       }
//       catch(e){
//         setError(e.message)
//         console.log(e.message)
//       }
//     }

//    const handleSubmit = async (e) =>{
//      await  db.handleCreateNewUser(firstname,lastname,username,email,password)
//      if(!values.firstname || !values.lastname || !values.username || !values.email ||!values.password)
//      {
//          setErrorMessage("Fill all fields");
//          return;
//      }
//      setErrorMessage("");
//      setSubmitButtonDisable(true)

//      console.log(values)
//    }
//    return (
//      <div className='signin' >
//          <div className="signin-left">
//              <img src="https:dev-myipr.p2eppl.com/static/media/sidebar.109d47a6c585553fa6c8.png" alt="" srcset="" />
//              <div className="signin-logo">
//                  <img src="	https:dev-myipr.p2eppl.com/static/media/ipr-scanner.b936b6af536155305b3356783c988784.svg" alt="" srcset="" />
//              </div>
//              <div className="signin-left-content">
//                <div className="content-head">
//                  <p>
//                  <strong>Protect, manage</strong> and <br /><strong>monetise</strong> your creation,<br /><em>affordably</em>  and <em>seamlessly</em>
//                  </p>
//                </div>
//                <div className="content-foot">
//                  <p>MyIPR provides end-to-end intellectual property management. Signup today!</p>
//                </div>
//              </div>
//          </div>
//          <form  onSubmit={handleSubmit} className='signin-right'>
//              <div className="signin-form">
//                  <div className="form-head">
//                    <h1>Welcome to MyIPR</h1>
//                    <p>Already have an account ? <span><Link to='/'>Login</Link></span></p>
//                  </div>
//                  <div className="form-name">
//                      <div className="form-first-name">
//                    <p> First Name </p>
//                    <input type="text" onChange={(e)=>setValues((prev)=> ({...prev,firstname: e.target.value})) } placeholder='First name' />
//                     </div>
//                    <div className="form-last-name">
//                    <p> Last Name </p>
//                    <input type="text" onChange={(e)=> setValues((prev)=>({...prev,lastname: e.target.value}))} placeholder='Last name' />
//                    </div>
//                  </div>
//                  <div className="form-username">
//                    <p> Username </p>
//                    <input type="text" onChange={(e)=> setValues((prev)=>({...prev,username: e.target.value}))} placeholder='Enter your username' />
//                  </div>

//                  <div className="form-email">
//                    <p> Email</p>
//                    <input type="text" onChange={(e)=> setValues((prev)=>({...prev,email: e.target.value}))} placeholder='Enter your email or username' />
//                  </div>
//                  <div className="form-password">
//                    <p>Password</p>
//                    <input type="password" onChange={(e)=> setValues((prev)=>({...prev,password: e.target.value}))} placeholder='Enter your password'  />
//                  </div>
//                  {/* <div className="form-forgot">
//                    <a href="http:myipr.io" target="_blank" rel="noopener noreferrer">Forgot Password?</a>
//                  </div> */}
//                  <div className="form-button">
//                  <p className='error-style'>{errorMessage}</p>
//                  <button type="submit" disabled={submitButtonDisable}>Sign-up</button>

//                  </div>
//              </div>
//          </form>

//      </div>

//    )
//  }

//  export default SignUp
