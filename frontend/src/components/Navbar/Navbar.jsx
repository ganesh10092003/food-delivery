import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home")
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)

  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate('/')
  }

  return (
    <div className='navbar px-0 py-[20px] flex justify-between items-center'>
      <Link to='/'><img src={assets.logo} alt="" className="logo w-[180px]" /></Link>
      <ul className="navbar-menu flex list-none gap-[20px] text-[#49557e] text-lg">
        <Link to='/' onClick={() => { setMenu("Home") }} className={`cursor-pointer ${menu === "Home" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>
          Home
        </Link>
        <a href='#explore-menu' onClick={() => { setMenu("Menu") }} className={`cursor-pointer ${menu === "Menu" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>
          Menu
        </a>
        <a href='#footer' onClick={() => { setMenu("Contact-us") }} className={`cursor-pointer ${menu === "Contact-us" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>
          Contact us
        </a>
      </ul>
      <div className="navbar-right flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={`${getTotalCartAmount() === 0 ? "hidden" : ""} dot absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]`}></div>
        </div>
        {!token
          ? <button onClick={() => { setShowLogin(true) }} className='bg-transparent text-base text-[#49557e] border-[1px] border-[tomato] py-2 px-7 rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition duration-300'>
            Sign In
          </button>
          : <div className='navbar-profile relative group'>
            <img className='cursor-pointer' src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown absolute hidden right-0 z-10 group-hover:flex group-hover:flex-col group-hover:gap-[10px] group-hover:bg-[#fff2ef] group-hover:py-[12px] group-hover:px-[25px] group-hover:rounded-[4px] group-hover:border-[1px] group-hover:border-[tomato] group-hover:outline-2 group-hover:outline-[white] group-hover:list-none group-hover:w-max">
              <li className='hover:text-[tomato] flex items-center gap-[10px] cursor-pointer'><img className='w-5' src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout} className='hover:text-[tomato] flex items-center gap-[10px] cursor-pointer'><img className='w-5' src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>}
      </div>
    </div >
  )
}

export default Navbar
