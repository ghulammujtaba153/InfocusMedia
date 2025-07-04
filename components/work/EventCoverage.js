import React, { useState } from 'react'

const data = [
  {
    title: "7X x Sikka Collaboration",
    image: "/projects/35.png",
  },
  {
    title: "Marketing Campaign",
    image: "/projects/35.png",
  },
  {
    title: "EXPO Event Coverage",
    image: "/projects/35.png",
  },
  {
    title: "Brand Partnership",
    image: "/projects/35.png",
  },
]

const EventCoverage = () => {
  const INITIAL_COUNT = 2;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleToggle = () => {
    if (visibleCount >= data.length) {
      setVisibleCount(INITIAL_COUNT); // Collapse to initial items
    } else {
      setVisibleCount(data.length); // Show all items
    }
  };

  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col w-full gap-8'>
        {data.slice(0, visibleCount).map((item, index) => (
          <React.Fragment key={index}>
            <div className='w-full h-[1px] bg-gray-100 my-6'></div>

            <div className='flex flex-col flex-col-reverse md:flex-row gap-6 w-full'>
              {/* Text */}
              <div className='md:w-1/4 w-full flex md:justify-end'>
                <div className='flex gap-10 md:gap-0 md:flex-col  md:text-right text-left'>
                  <p className='text-sm text-gray-500'>Client</p>
                  <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold'>{item.title}</h1>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className='w-full md:w-3/4'>
                <img
                  src={item.image}
                  alt={item.title || 'Case Study'}
                  className='w-full h-[400px] object-cover rounded-md'
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className='flex justify-center items-center mt-10'>
        <button
          onClick={handleToggle}
          className="bg-black text-white px-6 py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium"
        >
          {visibleCount >= data.length ? "See Less" : "See More!"}
        </button>
      </div>
    </div>
  )
}

export default EventCoverage
