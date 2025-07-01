import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-[#FAFAFA] py-20 px-6 h-screen flex gap-5 md:mt-0 mt-20 md:flex-row flex-col item-center'>
        <div className='md:w-1/2 flex flex-col justify-end'>
            
            <h1 className='text-3xl md:text-6xl font-bold'>Get In Touch</h1>
        </div>


        <div className='md:w-1/2 flex flex-col justify-end'>
            <h1 className='text-xl font-semibold mb-4'>contact@infocusmedia.ae</h1>
            <h1 className='text-xl font-semibold'>+971 (04) 3300 409</h1>
            <h1 className='text-xl font-semibold'> Mon-Fri 8AM-6PM</h1>
           
            
        </div>
        

      
    </div>
  )
}

export default HeroSection
