import React from 'react'

const Hero = () => {
  return (
    <div className="hero h-[34vw] my-[30px] mx-auto bg-[url('/hero_img.png')] bg-no-repeat bg-contain relative">
      <div className="hero-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-[fadeIn_3s]">
        <h2 className='font-medium text-white text-custom-heading'>Order your favourite food here</h2>
        <p className='text-white text-[1vw]'>Indulge in our diverse menu, showcasing a mouthwatering selection of dishes prepared with the finest ingredients and culinary mastery. Our goal is to fulfill your cravings and enhance your dining experience with every delightful bite.</p>
        <button className='border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-custom-paragraph rounded-[50px]'>View Menu</button>
      </div>
    </div>
  )
}

export default Hero
