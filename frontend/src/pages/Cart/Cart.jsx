import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, backendURL } = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className='cart mt-[100px]'>
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[gray] text-custom-paragraph">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='h-[1px] bg-[#e2e2e2] border-none' />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='my-[10px] mx-0  cart-items-item grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[black] text-custom-paragraph'>
                  <img className='w-[50px]' src={backendURL + '/images/' + item.image} alt="" />
                  <p className=''>{item.name}</p>
                  <p className=''>Rs {item.price}</p>
                  <p className=''>{cartItems[item._id]}</p>
                  <p className=''>Rs {item.price * cartItems[item._id]}</p>
                  <p onClick={() => { removeFromCart(item._id) }} className='cursor-pointer'>x</p>
                </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none' />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom mt-[80px] flex justify-between gap-custom-gap">
        <div className="cart-total flex-[1] flex flex-col gap-5 ">
          <h2 className='font-bold text-xl'>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr className='my-[10px] mx-0' />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>Rs {getTotalCartAmount() === 0 ? 0 : 20}</p>
            </div>
            <hr className='my-[10px] mx-0' />
            <div className="flex justify-between font-medium">
              <p>Total</p>
              <p>Rs {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</p>
            </div>
          </div>
          <button onClick={() => { navigate('/order') }} className='border-none text-white bg-[tomato] w-custom-buttonWidth-1 py-[12px] px-0 rounded-[4px] cursor-pointer '>Proceed to Checkout</button>
        </div>
        <div className="cart-promo-code flex-[1]">
          <div>
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className="cart-promo-code-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
              <input className='bg-transparent border-none outline-none pl-[10px]' type="text" placeholder='Promo code' />
              <button className='w-custom-buttonWidth-2 py-[12px] px-[5px] bg-black border-none text-white rounded-[4px]'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
