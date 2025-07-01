import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-[#FAFAFA] py-20 px-6 h-screen flex gap-5 md:mt-0 mt-20 md:flex-row flex-col item-center'>
        <div className='md:w-1/2 flex flex-col justify-end'>
            <h1 className='text-3xl md:text-5xl font-bold'>Join</h1>
            <h1 className='text-3xl md:text-6xl font-bold'>Our Team</h1>
        </div>


        <div className='md:w-1/2 flex flex-col justify-end'>
            <h1 className='text-xl font-semibold'>we’re always on the lookout for brilliant minds and bold ideas. check out our vacancies and apply for the one that suits you best!</h1>
            <div className="text-left mt-10">
          <button className="bg-black text-white px-6 py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium">
            Join Now!
          </button>
        </div>
        </div>


      
    </div>
  )
}

export default HeroSection
