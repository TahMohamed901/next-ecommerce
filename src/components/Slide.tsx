import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Slide = ({slideInfo}) => {
  return (
    <>
    {/* Text Container */}
    <div className='h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
        <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>
        {slideInfo.description}
        </h2>
        <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>
        {slideInfo.title}
        </h1>
        <Link href={slideInfo.url}>
        <button className='rounded-md bg-black text-white py-3 px-4 '>
        SHOP NOW
        </button>
        </Link>
    </div>
    {/* Image Container */}
    <div className='h-1/2 xl:w-1/2 xl:h-full relative'>
        <Image src={slideInfo.img} alt='' fill sizes='100%' className='object-cover'/>
    </div>
    </>

  )
}

export default Slide