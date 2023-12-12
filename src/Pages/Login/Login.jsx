import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading]= useState(false);

  const { signIn } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      setLoading(true)
      await signIn(email, password);
      navigate("/home");
      
    } catch (e) {
      if(e.code === 'auth/invalid-login-credentials' || e.code === 'auth/missing-password')
      {
        setError('Invalid email or password')
      }
      else{
        setError('An error occurred during Login')
      }
      setError(e.message);
      console.log(e.message);
     
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <div className="login">
      <div className="login-left">
        <img
          src="https://dev-myipr.p2eppl.com/static/media/sidebar.109d47a6c585553fa6c8.png"
          alt=""
          srcset=""
        />
        <div className="login-logo">
          <img
            src="	https://dev-myipr.p2eppl.com/static/media/ipr-scanner.b936b6af536155305b3356783c988784.svg"
            alt=""
            srcset=""
          />
        </div>
        <div className="login-left-content">
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
              MyIPR provides end-to-end intellectual property management. Login
              today!
            </p>
          </div>
        </div>
      </div>
     
      <form onSubmit={handleSubmit} className="login-right">
         <div   className="responsive-style">

      <img 
          
            src="	https://dev-myipr.p2eppl.com/static/media/myIpr-green.63532adc5d970aad34f3.png"
            alt=""
            srcset=""
          />
         </div>
        <div className="login-form">
          
          <div className="form-head">
            <h1>Welcome to MyIPR</h1>
            <p>
              New to MyIPR ?{" "}
              <span>
                <Link to="/signin">Join now</Link>
              </span>
            </p>
          </div>

          <div className="form-email">
            
            <p> Email or Username </p>
            <input
              autoComplete="on"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or username"
            />
          </div>
          <div className="form-password">
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {error && <div style={{color:'red'}}>{error}</div>}
          <div className="form-forgot">
            <a href="http://myipr.io" target="_blank" rel="noopener noreferrer">
              Forgot Password?
            </a>
           
          </div>
          <div className="form-button">
            <button type="submit"  disabled={loading}>{loading ? 'Logging in..' : 'Login'}</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
