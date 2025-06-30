import React from 'react'

const BuilderSection = () => {
  return (
    <div className='bg-[#FAFAFA] w-full h-[850px] px-[5%] py-20 flex md:flex-row flex-col justify-between'>
      <div className='flex flex-col'>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold'>WE ARE</h1>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold'>FUTURE BUILDERS</h1>
      </div>
      <div className='w-1/2 h-full flex flex-col justify-between'>
        <p>
            Our stories are distinctive, and our content captures the essence of our community with clarity and depth. We champion an open-door policy that nurtures collaboration and productivity, breaking free from the confines of traditional offices. Rather than idolizing titles, we empower individuals, fostering a workplace rooted in trust and collective growth.
        </p>
        <div>
            <h2 className='mb-4 font-bold'>Our approach to planning is proactive and reflective, as we continuously assess ourselves and cultivate a cohesive team that embraces technological advancements.</h2>
        <p>
We confront challenges with resilience and creativity, believing that healthy competition propels us forward and shapes us into our best selves. Together, we are not just building an exceptional team; we are crafting a legacy of success, forging a pathway rich with achievements and inspiring stories that uplift us all.
        </p>
        </div>
      </div>
    </div>
  )
}

export default BuilderSection
