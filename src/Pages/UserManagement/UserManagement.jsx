import React from 'react'
import './UserManagement.css'
import Home from '../Home/Home'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

const UserManagement = () => {
  return (
    <div className='layout'>
      <div className="user-layout-nav">
        <Navbar/>
      </div>
      <div className="user-main">
        <div className="user-sidebar">
          <Sidebar/>
        </div>
        <div className="user-main-content">

        </div>
      </div>
    </div>
  )
}

export default UserManagement