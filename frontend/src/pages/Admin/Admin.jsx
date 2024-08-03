import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import { Route, Routes } from 'react-router-dom'
import AdminAdd from '../AdminAdd/AdminAdd'
import AdminList from '../AdminList/AdminList'
import AdminOrders from '../AdminOrders/AdminOrders'
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'

const Admin = () => {
  const [menu, setMenu] = useState("")

  return (
    <div className='admin'>
      <AdminNavbar setMenu={setMenu} />
      <hr className='bg-[#a9a9a9] border-none h-[1px]' />
      <div className="app-content flex">
        <AdminSidebar menu={menu} setMenu={setMenu} />
        <Routes>
          <Route path='addItem' element={<AdminAdd />} />
          <Route path='listItems' element={<AdminList />} />
          <Route path='orders' element={<AdminOrders />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin
