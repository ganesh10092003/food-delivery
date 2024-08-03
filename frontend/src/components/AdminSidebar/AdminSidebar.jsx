import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const AdminSidebar = ({ menu, setMenu }) => {
  return (
    <div className='admin-sidebar w-[18%] min-h-[100vh] border-[#a9a9a9] border-r-[1.5px] text-custom-paragraph'>
      <div className="sidebar-options pt-[50px] pl-[20%] flex flex-col gap-5">
        <NavLink onClick={() => { setMenu("add") }} to='addItem' className={`flex items-center gap-[12px] border-[1px] border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-[3px_0_0_3px] cursor-pointer ${menu === "add" ? "bg-[#fff0ed] border-[tomato]" : ""}`}>
          <img src={assets.admin_add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink onClick={() => { setMenu("list") }} to='listItems' className={`flex items-center gap-[12px] border-[1px] border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-[3px_0_0_3px] cursor-pointer ${menu === "list" ? "bg-[#fff0ed] border-[tomato]" : ""}`}>
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink onClick={() => { setMenu("orders") }} to='orders' className={`flex items-center gap-[12px] border-[1px] border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-[3px_0_0_3px] cursor-pointer ${menu === "orders" ? "bg-[#fff0ed] border-[tomato]" : ""}`}>
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div >
  )
}

export default AdminSidebar
