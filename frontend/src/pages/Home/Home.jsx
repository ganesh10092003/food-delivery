import React, { useState } from 'react'
import Hero from '../../components/Hero/Hero'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div className='home'>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home
