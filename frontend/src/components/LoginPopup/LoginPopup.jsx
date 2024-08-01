import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup absolute z-10 w-full h-full bg-[#00000090] grid'>
      <form action="" className="login-popup-container place-self-center w-custom-popupWidth text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] animate-[fadeIn_0.5s]">
        <div className="login-popup-title flex justify-between items-center text-[black]">
          <h2 className='font-semibold text-lg'>{currState}</h2>
          <img className='w-4 cursor-pointer' onClick={() => { setShowLogin(false) }} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5">
          {currState === "SignUp" ? <input className='ouline-none border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]' type="text" placeholder='Your name' required /> : <></>}
          <input className='ouline-none border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]' type="email" placeholder='Your email' required />
          <input className='ouline-none border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]' type="password" placeholder='Password' required />
        </div>
        <button className='border-none p-[10px] rounded-[4px] text-[white] bg-[tomato] text-[15px] cursor-pointer'>{currState === "SignUp" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition flex items-start gap-[8px] mt-[-15px]">
          <input className='mt-[5px]' type="checkbox" required />
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
