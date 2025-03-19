"use client"
import Image from 'next/image'
import { useState } from 'react';


interface ItemInfo {
    img: string;
    title: string;
    description: string;
    price: number;
}

const CarouselItem: React.FC<ItemInfo> = ({ img, title, description, price }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    
    return (
    <div className='text-left flex flex-col select-none  h-[400px] w-[240px] p-5 max-sm:p-2 max-sm:w-full md:mb-10'
    >
    {/* Image */}
        <div className='flex justify-center max-sm:h-1/2 max-sm:w-full h-[100vw] relative'>
            <Image 
            className='object-cover'
            src={img} 
            alt={title} 
            fill
            sizes='100vw'
            draggable={false}
            />
        </div>
    
    {/* Favorite Icon */}
        <div className='flex max-sm:w-full justify-end items-center pt-2'>
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
            <h1 className='font-semibold text-sm'>Description</h1>
            <p className='font-thin text-sm'>{description}</p>
            <h1 className='font-medium'>${price}</h1>
        </div>
    </div>
);
}

export default CarouselItem