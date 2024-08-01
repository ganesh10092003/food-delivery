import React, { useState } from 'react'
import Hero from '../../components/Hero/Hero'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodList from '../../components/FoodList/FoodList'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div className='home'>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodList category={category} />
    </div>
  )
}

export default Home
