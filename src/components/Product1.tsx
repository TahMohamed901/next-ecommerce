import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product1 = ({img}:any) => {
  return (
    <div className='text-left flex flex-col  bg-red-500 select-none'>
        {/* Image */}
        <div className='flex justify-center max-sm:h-[150px] max-sm:w-[150px] h-[200px] w-[200px] relative'>
            <Image 
            className='object-cover '
            src={img} 
            alt='' 
            fill
            sizes='100vw'
            draggable={false}
            />
        </div>
        {/* Icon */}
        <div>
        <h1>icon</h1>
        </div>
        {/* Details */}
        <div>
            {/* Title */}
            <div> <h1>title</h1> </div>
            {/* Description */}
            <div> <h1>description</h1> </div>
            {/* Price */}
            <div> <h1>price </h1> </div>
        </div>
    </div>
  )
}

export default Product1