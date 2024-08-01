import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodCard = ({ _id, name, image, price, description }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
  return (
    <div className='food-card w-full m-auto rounded-[15px] shadow-[0_0_10px_#00000015] transition duration-300 animate-[fadeIn_1s]'>
      <div className="food-card-img-container relative">
        <img src={image} alt="" className="food-item-image w-full rounded-[15px_15px_0_0]" />
        {
          !cartItems[_id]
            ? <img className='add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full' onClick={() => { addToCart(_id) }} src={assets.add_icon_white} alt='' />
            : <div className='food-item-counter absolute bottom-[15px] right-[15px] flex gap-[10px] items-center p-[6px] rounded-full bg-white'>
              <img className='w-[30px]' onClick={() => { removeFromCart(_id) }} src={assets.remove_icon_red} alt='' />
              <p>{cartItems[_id]}</p>
              <img className='w-[30px]' onClick={() => { addToCart(_id) }} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="food-item-info p-5">
        <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
          <p className='font-medium text-[20px]'>{name}</p>
          <img className='w-[70px]' src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc text-[#676767] text-xs">{description}</p>
        <p className="food-item-price text-[tomato] font-medium text-[22px] my-[10px] mx-0">Rs. {price}</p>
      </div>
    </div>
  )
}

export default FoodCard
