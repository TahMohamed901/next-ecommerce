import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = ({img}:any) => {
  return (
    <>
    <Link href="/" className='w-full flex flex-col gap-3 sm:w-[45%] md:w-[45%] lg:w-[28%] xl:w-[22%] border-2 p-2'>
        <div className='relative w-full h-80 '>
          <Image 
          src={img} 
          alt='' 
          fill
          sizes='25vw'
          className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
          />
          <Image
            src="/p2.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product 1</span>
            <span className="font-semibold">$220</span>
        </div>
        <div className='text-sm text-gray-500'>
          My Description
        </div>
        <button className="rounded-2xl ring-1 ring-main text-main w-max py-2 px-4 text-xs hover:bg-main hover:text-white">
            Add to Cart
        </button>
    </Link>
    </>
  )
}

export default Product