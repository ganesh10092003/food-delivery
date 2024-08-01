import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer mt-[100px] text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px]' id='footer'>
      <div className="footer-content w-full grid grid-cols-[2fr_1fr_1fr] gap-[80px]">
        <div className="footer-content-left flex flex-col items-start gap-[20px]">
          <img src={assets.logo} alt="" className='w-[180px]' />
          <p>Indulge in our diverse menu, showcasing a mouthwatering selection of dishes prepared with the finest ingredients and culinary mastery. Our goal is to fulfill your cravings and enhance your dining experience with every delightful bite.</p>
          <div className="footer-social-icons flex">
            <img className='w-10 mr-[15px]' src={assets.facebook_icon} alt="" />
            <img className='w-10 mr-[15px]' src={assets.twitter_icon} alt="" />
            <img className='w-10 mr-[15px]' src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center flex flex-col items-start gap-[20px]">
          <h2 className='text-white text-2xl font-bold'>COMPANY</h2>
          <ul>
            <li className='mb-[10px] cursor-pointer'>Home</li>
            <li className='mb-[10px] cursor-pointer'>About us</li>
            <li className='mb-[10px] cursor-pointer'>Delivery</li>
            <li className='mb-[10px] cursor-pointer'>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right flex flex-col items-start gap-[20px]">
          <h2 className='text-white text-2xl font-bold'>Get in touch</h2>
          <ul>
            <li className='mb-[10px] cursor-pointer'>+91 8374490567</li>
            <li className='mb-[10px] cursor-pointer'>ch.tejamr@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className='w-full h-[2px] my-[20px] mx-0 bg-[grey] border-none' />
      <p className="footer-copyright">Copyright 2024 © Ganesh - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
