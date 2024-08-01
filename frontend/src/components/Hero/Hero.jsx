import React from 'react'

const Hero = () => {
  return (
    <div className="hero h-[34vw] my-[30px] mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative rounded-2xl">
      <div className="hero-contents absolute flex flex-col items-start gap-[1.5vw] bottom-[10%] left-[6vw] animate-[fadeIn_3s]">
        <h2 className='max-w-[65%] font-bold text-[white] text-custom-heading'>Order your favourite food for instant delivery</h2>
        <p className='max-w-[50%] text-white text-[1vw]'>Indulge in our diverse menu, showcasing a mouthwatering selection of dishes prepared with the finest ingredients and culinary mastery. Our goal is to fulfill your cravings and enhance your dining experience with every delightful bite.</p>
        <button className='border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-custom-paragraph rounded-[50px]'>View Menu</button>
      </div>
    </div>
  )
}

export default Hero
