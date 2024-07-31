import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [menu, setMenu] = useState("Home")

  return (
    <div className='navbar px-0 py-5 flex justify-between items-center'>
      <img src={assets.logo} alt="" className="logo w-[150px]" />
      <ul className="navbar-menu flex list-none gap-5 text-[#49557e] text-lg">
        <li onClick={() => { setMenu("Home") }} className={`cursor-pointer ${menu === "Home" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>
          Home
        </li>
        <li onClick={() => { setMenu("Menu") }} className={`cursor-pointer ${menu === "Menu" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>
          Menu
        </li>
        <li onClick={() => { setMenu("Mobile-App") }} className={`cursor-pointer ${menu === "Mobile-App" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>
          Mobile-App
        </li>
        <li onClick={() => { setMenu("Contact-us") }} className={`cursor-pointer ${menu === "Contact-us" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>
          Contact us
        </li>
      </ul>
      <div className="navbar-right flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative">
          <img src={assets.basket_icon} alt="" />
          <div className="dot absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]"></div>
        </div>
        <button className='bg-transparent text-base text-[#49557e] border-[1px] border-[tomato] py-2 px-7 rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition duration-300'>
          Sign In
        </button>
      </div>
    </div >
  )
}

export default Navbar
