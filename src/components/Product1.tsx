"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';


const Product1 = ({img}:any) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className='text-left flex flex-col select-none h-[350px] w-[240px] p-5 max-sm:pr-14 md:mb-10'>
        {/* Image */}
        <div className='flex justify-center max-sm:h-1/2 max-sm:w-full h-[100vw] relative'>
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
        <div className='flex justify-end items-center pt-2'>
          {
            (isFavorite ? (
              <Image 
              className=''
              src="/icons/r-fv.svg" alt='' width={20} height={20}
              onClick={()=> setIsFavorite((prev)=> !prev)}
              />
            ) : (
            <Image 
            className=''
            src="/icons/favoriteicon.svg" alt='' width={20} height={20}
            onClick={()=> setIsFavorite((prev)=> !prev)}
            />
            ))
          }
          
        </div>
        {/* Details */}
        <div>
            {/* Title */}
            <div> <h1 className='font-light'>L'esprit Déchaîné</h1> </div>
            {/* Description */}
            <div> 
              <h1 className='font-semibold text-sm'>description</h1>
              <div>
                
              </div>
              <h1 className='font-thin text-sm'>description</h1> 
            </div>
            {/* Price */}
            <div> <h1 className='font-medium'>$553 </h1> </div>
        </div>
    </div>
  )
}

export default Product1