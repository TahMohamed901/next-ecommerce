"use client"
import Image from 'next/image';
import React, { useState } from 'react'
interface ProductCardProps{
    img:string;
    title:string;
    username:string;
    description:string;
    price:number;
}
const ProductCard = ({img, title, username, description, price}:ProductCardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <div className='p-2 text-left flex flex-col select-none max-sm:p-2  md:mb-5
        
        '
        >
            {/* Image */}
                <div className='flex justify-center max-sm:h-[300px] w-full  max-md:h-[300px] max-lg:h-[200px] h-[200px] relative'>
                    <Image 
                    className='object-cover'
                    src={img} 
                    alt={title} 
                    fill
                    sizes='100vw'
                    draggable={false}
                    />
                </div>
            
            {/* Icons */}
                <div className='flex max-sm:w-full justify-end items-center pt-2'>
                    <Image 
                    className='cursor-pointer'
                    src={isFavorite ? "/icons/r-fv.svg" : "/icons/favoriteicon.svg"} 
                    alt="favorite icon" 
                    width={20} 
                    height={20}
                    onClick={() => setIsFavorite(prev => !prev)}
                    />
                    <Image 
                    className='cursor-pointer'
                    src={isFavorite ? "/icons/r-fv.svg" : "/icons/favoriteicon.svg"} 
                    alt="favorite icon" 
                    width={20} 
                    height={20}
                    onClick={() => setIsFavorite(prev => !prev)}
                    />
                    
                </div>
        
            {/* Product Details */}
                <div>
                    <h1 className='font-light'>{title}</h1>
                    <h1 className='font-semibold text-sm'>{username}</h1>
                    <p className='font-thin text-sm'>{description}</p>
                    <h1 className='font-medium'>${price}</h1>
                    
                </div>
            </div>
    )
}

export default ProductCard