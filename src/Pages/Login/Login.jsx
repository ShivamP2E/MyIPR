import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigation } from 'react-router-dom'


const Login = () => {
  // const navigate=useNavigation()
  //  const loginHandler=()=>{
        
  //       const path="../Home/Home.jsx"

  //       navigate(path)
  //  }

  return (
    <div className='login' >
        <div className="login-left">
            <img src="https://dev-myipr.p2eppl.com/static/media/sidebar.109d47a6c585553fa6c8.png" alt="" srcset="" />
            <div className="login-logo">
                <img src="	https://dev-myipr.p2eppl.com/static/media/ipr-scanner.b936b6af536155305b3356783c988784.svg" alt="" srcset="" />
            </div>
            <div className="login-left-content">
              <div className="content-head">
                <p>
                <strong>Protect, manage</strong> and <br /><strong>monetise</strong> your creation,<br /><em>affordably</em>  and <em>seamlessly</em>
                </p>
              </div>
              <div className="content-foot">
                <p>MyIPR provides end-to-end intellectual property management. Login today!</p>
              </div>
            </div>
        </div>
        <div className='login-right'>
            <div className="login-form">
                <div className="form-head">
                  <h1>Welcome to MyIPR</h1>
                  <p>New to MyIPR ? <a href="http://myipr.io" target="_blank" rel="noopener noreferrer">Join now</a></p>
                </div>

                <div className="form-email">
                  <p> Email or Username </p>
                  <input type="text" value="" placeholder='Enter your email or username' required/>
                </div>
                <div className="form-password">
                  <p>Password</p>
                  <input type="password" placeholder='Enter your password' required />
                </div>
                <div className="form-forgot">
                  <a href="http://myipr.io" target="_blank" rel="noopener noreferrer">Forgot Password?</a>
                </div>
                <div className="form-button">
                <Link to='/home'><button type="button" >Login</button></Link>
                </div>
            </div>
        </div>

    </div>

  )
}

export default Login