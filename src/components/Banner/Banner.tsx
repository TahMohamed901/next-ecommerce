import Image from 'next/image'
import React from 'react'
import Carousel from '@/components/Banner/Banner'

const Banner = () => {
  return (
    <div className='w-full flex justify-center items-center'>
    <div className='
      w-full 
      relative overflow-hidden  sm:h-[50vh] lg:h-[40vh] xl:h-[70vh]'>
          {/* <Carousel slides={[['/images/sq5.png','/images/img6.jpg'],['/images/sq.png','/images/img7.jpg']]} /> */}
      </div>
        
    </div>
  )
}

export default Banner
