import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div className='admin-sidebar w-[18%] min-h-[100vh] border-[#a9a9a9] border-r-[1.5px]  text-custom-paragraph'>
      <div className="sidebar-options pt-[50px] pl-[20%] flex flex-col gap-5">
        <NavLink to='/admin/addItem' className="sidebar-option flex items-center gap-[12px] border-[1px] border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-[3px_0_0_3px] cursor-pointer">
          <img src={assets.admin_add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/admin/listItem' className="sidebar-option flex items-center gap-[12px] border-[1px] border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-[3px_0_0_3px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
      </div>
    </div>
  )
}

export default AdminSidebar
