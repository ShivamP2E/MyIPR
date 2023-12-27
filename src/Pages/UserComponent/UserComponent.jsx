import React from 'react'
import './UserComponent.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import LinkHandler from '../../components/LinkHandler/LinkHandler'
import Navbar from '../../components/Navbar/Navbar'
const UserComponent = () => {
  return (
    <>
    <div className="layout">
      <div className="user-layout-nav">
        <Navbar/>
      </div>
      <div className="user-main-content">
        <div className="user-left">
          <Sidebar/>
        </div>
        <div className="user-right-wrapper">
        {/* <div className="user-role">
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
        </div> */}
        {/* <div className="rendered-component"> */}
          <LinkHandler/>
        {/* </div> */}
        </div>
      </div>
    </div>
      
        
    </>
  )
}

export default UserComponent