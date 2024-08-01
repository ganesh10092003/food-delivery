import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {

  return (
    <div className='explore-menu flex flex-col gap-[20px]' id='explore-menu'>
      <h1 className='text-[#262626] font-medium text-[30px]'>Explore our Menu</h1>
      <p className='explore-menu-text max-w-[60%] text-[#808080]'>Indulge in our diverse menu, showcasing a mouthwatering selection of dishes prepared with the finest ingredients and culinary mastery. Our goal is to fulfill your cravings and enhance your dining experience with every delightful bite.</p>
      <div className="explore-menu-list flex justify-between items-center text-center gap-[30px] my-[20px] mx-0 overflow-x-scroll hide-scrollbar">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => { setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name)) }} key={index} className='explore-menu-list-item'>
              <img className={`${category === item.menu_name ? "border-4 border-[tomato] p-[2px] " : ""}w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition duration-200 `} src={item.menu_image} alt="" />
              <p className='mt-[2px] text-[#747474] text-custom-exploreMenuItems cursor-pointer'>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr className='my-[10px] mx-0 h-[2px] bg-[#e2e2e2] border-none' />
    </div>
  )
}

export default ExploreMenu
