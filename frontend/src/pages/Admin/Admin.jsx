import React from 'react'
import AdminSidebar from './components/AdminSidebar/AdminSidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'

const Admin = () => {
  return (
    <div className='admin '>
      <hr />
      <div className="app-content">
        <AdminSidebar />
      </div>
    </div>
  )
}

export default Admin
