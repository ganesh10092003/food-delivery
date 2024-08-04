import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import { Route, Routes } from 'react-router-dom'
import AdminAdd from '../AdminAdd/AdminAdd'
import AdminList from '../AdminList/AdminList'
import AdminOrders from '../AdminOrders/AdminOrders'
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Admin = () => {
  const [menu, setMenu] = useState("")
  const backendURL = "http://localhost:5000"

  return (
    <div className='admin'>
      <ToastContainer />
      <AdminNavbar setMenu={setMenu} />
      <hr className='bg-[#a9a9a9] border-none h-[1px]' />
      <div className="app-content flex">
        <AdminSidebar menu={menu} setMenu={setMenu} />
        <Routes>
          <Route path='addItem' element={<AdminAdd url={backendURL} />} />
          <Route path='listItems' element={<AdminList url={backendURL} />} />
          <Route path='orders' element={<AdminOrders url={backendURL} />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin
