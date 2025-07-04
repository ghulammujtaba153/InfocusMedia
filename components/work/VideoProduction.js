import React, { useState } from 'react';

const data = [
  { title: "7X x Sikka Collaboration", image: "/assets/Case studies/7X x Sikka.jpg" },
  { title: "Marketing Campaign", image: "/assets/Case studies/7X x Sikka.jpg" },
  { title: "EXPO Event Coverage", image: "/assets/Case studies/EXPO.jpg" },
  { title: "Brand Partnership", image: "/assets/Case studies/7X x Sikka.jpg" },
];

const VideoProduction = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Show 2 initially

  const handleToggle = () => {
    if (visibleCount >= data.length) {
      setVisibleCount(4); // Collapse to 2 items
    } else {
      setVisibleCount(data.length); // Show all
    }
  };

  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col w-full gap-8'>
        {data.slice(0, visibleCount).map((item, index) => (
          <React.Fragment key={index}>
            <div className='w-full h-[1px] bg-gray-200 my-6'></div>

            <div className='flex flex-col flex-col-reverse md:flex-row gap-6 w-full'>
              {/* Text */}
              <div className='md:w-1/3 w-full flex md:justify-end'>
                <div className='flex gap-10 md:gap-0 md:flex-col md:text-right text-left'>
                  <p className='text-sm text-gray-500'>Client</p>
                  <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold'>{item.title}</h1>
                    <p className='text-xl font-bold text-gray-400'>UAE</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className='w-full md:w-2/3'>
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
          {visibleCount >= data.length ? 'See Less' : 'See More!'}
        </button>
      </div>
    </div>
  );
};

export default VideoProduction;
