import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import AdminList from './pages/AdminList/AdminList'
import AdminAdd from './pages/AdminAdd/AdminAdd'
import Admin from './pages/Admin/Admin'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app w-[80%] m-auto'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/admin'>
            <Route index element={<Admin />} />
            <Route path='addItem' element={<AdminAdd />} />
            <Route path='listItem' element={<AdminList />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
