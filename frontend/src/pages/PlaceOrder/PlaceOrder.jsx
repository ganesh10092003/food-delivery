import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <form className='place-order flex items-start justify-between gap-[50px] mt-[100px]'>
      <div className="place-order-left w-full max-w-custom-leftOrderWidth">
        <p className='title text-[30px] font-semibold mb-[50px]'> Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='FirstName' />
          <input type="text" placeholder='LastName' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zipcode' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right w-full max-w-custom-rightOrderWidth mt-3">
        <div className="cart-total flex-[1] flex flex-col gap-5 ">
          <h2 className='font-bold text-2xl'>Cart Totals</h2>
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
          <button className='border-none text-white bg-[tomato] w-custom-buttonWidth-1 py-[12px] px-0 rounded-[4px] mt-[30px] cursor-pointer '>Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
