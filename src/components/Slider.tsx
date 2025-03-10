"use client"
import { useEffect, useState } from 'react'
import Slide from './Slide';
const slides = [
    {
      id: 1,
      title: "Summer Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "/elk.jpg",
      url: "/",
      bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    }
  ];
const Slider = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div 
    className='
    max-sm:h-[calc(80vh-80px)] 
    max-md:h-[calc(80vh-80px)] 
    h-[calc(70vh-80px)]
    overflow-hidden'
    
    >
        <div 
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
        >
        {slides.map((slide) => (
            <div className={`${slide.bg} w-screen h-full flex flex-col gap-6 md:flex-row lg:flex-row xl:flex-row`} key={slide.id}>
                <Slide slideInfo={slide} />
            </div>
        ))

        }
        </div>
        
    </div>
  )
}

export default Slider