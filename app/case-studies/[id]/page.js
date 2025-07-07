'use client'

import Footer from '@/components/home/Footer';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'

const data = {
  title: "Title 1",
  subTitle: "Educating the World About COVID-19 with the Ministry of Health and Prevention",
  description: "At the onset of the unprecedented COVID-19 pandemic, relevant organizations, especially healthcare institutions, faced a significant challenge: to save as many lives as possible with their limited resources in the aftermath of this crisis, in addition to educating the public about this unfamiliar virus.",
  image: "/assets/expertise/image1.png",
}

const others = [
  {
    title: "Title 1",
    description: "This is the first case study description.",
    image: "/assets/expertise/image1.png",
  },
  {
    title: "Title 2",
    description: "This is the second case study description.",
    image: "/assets/expertise/image2.png",
  },
  {
    title: "Title 3",
    description: "This is the third case study description.",
    image: "/assets/expertise/image3.png",
  },
];

const Page = () => {
  const { id } = useParams(); // Correct usage

  return (
    <div className='flex flex-col px-6 pt-30'>
      <h1 className='text-[18px] md:text-[20px] lg:text-[25px] text-center font-semibold'>CASE STUDY</h1>
      
      <h2 className='pt-1 text-[40px] md:text-[64px] text-center font-bold'>{data.title}</h2>
      
      <img 
        src={data.image} 
        alt={data.title} 
        className='w-full h-[500px] object-cover mt-4'
      />
      
      <div className='flex md:flex-row flex-col justify-between gap-10 mt-6'>
        <p className='font-bold text-[32px] md:text-[40px] w-1/2'>{data.subTitle.toUpperCase()}</p>
        <p className='text-[16px] md:text-[18px] lg:text-[22px] w-1/2'>{data.description}</p>
      </div>


      <p className='pt-20 text-center md:text-left font-bold text-[16px] md:text-[18px] lg:text-[22px]'>Other Case Studies</p>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        
        
          {others.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Wrapper with Hover Group */}
              <div className="relative group overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover transition-all duration-300 group-hover:blur-sm"
                />
                {/* Hover Button */}
                <Link href="/case-studies/1" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                  <span className="bg-white text-black px-4 py-2 text-[16px] md:text-[18px] lg:text-[22px] font-medium rounded shadow-md">
                    Read
                  </span>
                </Link>
              </div>

              {/* Title and Description */}
              <div className="mt-2 px-1">
                <h3 className="text-2xl font-semibold text-[32px] md:text-[40px] ">
                  {item.title.toUpperCase()}
                </h3>
                <p className="text-gray-700 text-xs text-[16px] md:text-[18px] lg:text-[22px]">{item.description}</p>
              </div>
            </div>
          ))}
        
      </div>
      <div className="text-center mt-10 mb-20">
          <Link href="/case-studies" className="bg-black text-white px-6 py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium text-[16px] md:text-[18px] lg:text-[22px]">
            See All
          </Link>
        </div>


        <Footer/>
    </div>
  )
}

export default Page;
