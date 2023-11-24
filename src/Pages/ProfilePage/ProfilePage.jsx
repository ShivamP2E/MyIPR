import React from 'react'
import './ProfilePage.css'
import Home from '../Home/Home'

const ProfilePage = () => {
  return (
    <>
    <Home/>
    <div className='profilepage'>
      <div className="profilepage-back">
        <a href='#'>Back</a>
      </div>
      <div className="profilepage-main">
        <div className="profilepage-heading">
              <h1>
                Profile Info
              </h1>
              <p> Manage your personal information</p>
        </div>
        <div className="profilepage-upload">
          <div className="profilepage-photo">
            <img src="https://dev-myipr.p2eppl.com/logo192.png" alt="" />
          </div>
          <div className="profilepage-fileformat">
            <div className="fileformat-button">
            <input type="file" id="myFile" name="filename"/>
            </div>
            <div className="fileformat">
              <p>JPG, JPEG, PNG, Max Size: <b>2MB</b></p>
            </div>
          </div>

        </div>

        <hr />
        
        <div className="profilepage-about">
              <h1>About You</h1>
              <div className="about-name">
                <div className="about-first">
                  <p>First Name</p>
                  <input type="text" placeholder='xyz' disabled />
                </div>
                <div className="about-last">
                  <p>Last Name</p>
                  <input type="text" placeholder='abc' disabled />
                </div>
              </div>
              <div className="about-username">
                <div className="about-user">
                  <p>Username</p>
                  <input type="text" placeholder='xyz'  />
                </div>
                <div className="about-email">
                  <p>Email Address</p>
                  <input type="text" placeholder='abc' disabled />
                </div>
              </div>
              <div className="about-company">
                <p>Company Name</p>
                <input type="text" placeholder='Mai Labs' disabled />
              </div>
        </div>
  
        <hr />

        <div className="profilepage-kyb">
          <h1>KYB Status</h1>
          <div className="kybwrap">
          <div className="kyb-sction">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
          </div>
          <div className="kyb-content">
            <p>Your account is KYB verified.</p>
          </div>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default ProfilePage