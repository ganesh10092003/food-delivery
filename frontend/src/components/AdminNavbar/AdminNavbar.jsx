import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const AdminNavbar = ({ setMenu }) => {
  return (
    <div className='admin-navbar flex justify-between items-center py-2 px-[4%]'>
      <Link to='/admin'><img onClick={() => { setMenu("") }} className="logo w-custom-logoWidth cursor-pointer" src={assets.admin_logo} alt="" /></Link>
      <img className="profile-img w-8 cursor-pointer" src={assets.admin_profile_img} alt="" />
    </div>
  )
}

export default AdminNavbar
