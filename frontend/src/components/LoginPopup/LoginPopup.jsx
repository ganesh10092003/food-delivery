import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login")
  const [data, setData] = useState({ name: "", email: "", password: "" })
  const { backendURL, token, setToken } = useContext(StoreContext)


  const onChangeHandle = (event) => {
    const { name, value } = event.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const onLogin = async (event) => {
    event.preventDefault()
    let newURL = backendURL
    if (currState === 'Login') {
      newURL += '/api/user/login'
    }
    else {
      newURL += '/api/user/register'
    }
    const response = await axios.post(newURL, data)
    if (response.data.success) {
      localStorage.setItem("token", response.data.token)
      setToken(response.data.token)
      setShowLogin(false)
    }
    else {
      alert(response.data.message)
    }
  }

  return (
    <div className='login-popup absolute z-10 w-full h-full bg-[#00000090] grid'>
      <form onSubmit={onLogin} className="login-popup-container place-self-center w-custom-popupWidth text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] animate-[fadeIn_0.5s]">
        <div name="heading" className="login-popup-title flex justify-between items-center text-[black]">
          <h2 className='font-semibold text-lg'>{currState}</h2>
          <img className='w-4 cursor-pointer' onClick={() => { setShowLogin(false) }} src={assets.cross_icon} alt="" />
        </div>
        <div name="input" className="login-popup-inputs flex flex-col gap-5">
          {currState === "SignUp" ? <input name='name' onChange={onChangeHandle} value={data.name} className='ouline-none border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]' type="text" placeholder='Your name' required /> : <></>}
          <input autoComplete="on" name='email' onChange={onChangeHandle} value={data.email} className='ouline-none border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]' type="email" placeholder='Your email' required />
          <input name='password' onChange={onChangeHandle} value={data.password} className='ouline-none border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]' type="password" placeholder='Password' required />
        </div>
        <button type='submit' className='border-none p-[10px] rounded-[4px] text-[white] bg-[tomato] text-[15px] cursor-pointer'>{currState === "SignUp" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition flex items-start gap-[8px] mt-[-15px]">
          <input name="check-box" className='mt-[5px]' type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "SignUp"
          ? <p>Already have an Account? <span className="cursor-pointer text-[tomato] font-medium" onClick={() => { setCurrState("Login") }}>Login Here</span></p>
          : <p>Create a new Account? <span className="cursor-pointer text-[tomato] font-medium" onClick={() => { setCurrState("SignUp") }}>Click Here</span></p>}
      </form>
    </div >
  )
}

export default LoginPopup
