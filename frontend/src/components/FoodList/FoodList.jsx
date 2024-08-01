import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodCard from '../FoodCard/FoodCard'

const FoodList = ({ category }) => {
  const { food_list } = useContext(StoreContext)
  return (
    <div className='food-display mt-[30px]' id='food-display'>
      <h2 className='text-custom-foodDisplay font-semibold'>Top Dishes near you</h2>
      <div className="food-display-list grid grid-cols-foodListGrid mt-[30px] gap-[30px] gap-y-[50px]">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodCard key={index} _id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} />
            )
          }
        })}
      </div>
    </div>
  )
}

export default FoodList
