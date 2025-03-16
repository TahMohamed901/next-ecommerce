"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from "next/image"
import Menu from '@/components/Navbar/Menu'
import Searchbar from './Searchbar'
import NavIcons from './NavIcons'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && lastScrollY > 100 ) {
        setIsVisible(false); // Cache la navbar en scrollant vers le bas
        console.log(window.screenY)
      } else {
        setIsVisible(true); // Affiche la navbar en scrollant vers le haut
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <div className={`mx-auto max-sm:pt-0 px-4 md:px-10 pt-4 fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 z-50 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
        {/* Mobile */}
        <div className='md:hidden h-full flex-col justify-between items-center py-2'>
            {/* Top */}
            
            <div className='flex justify-between items-end mb-2 '>
                {/* Left */}
                <div className='flex justify-start items-end w-2/5 h-10 pb-1'>
                    <Link href={"/"} >
                    <Image src="/logo/logo-1_2.png" alt='' width={200} height={100} priority />
                    </Link>
                </div>
                {/* Right */}
                <div className='flex w-3/5 justify-end items-center'>
                <NavIcons/>
                <Menu/>
                </div>
            </div>

            {/* Bottom */}
            <div>
            <Searchbar/>
            </div>
        </div>

        {/* Big screens */}
        {/* Top */}
        <div className='hidden md:flex items-center '>
            {/* Left */}
            <div className='flex mr-10 justify-start items-center'>
                <Link href={"/"} className='flex justify-center items-center'>
                <Image src="/logo/logo-1_2.png" alt='' width={200} height={50} className=''/>
                
                </Link>
            </div>

            {/* Center */}
            <div className='w-2/3'>
                <Searchbar/>
            </div>

            {/* Right */}
            <div className='w-1/3 flex justify-end items-end mb-1'>
                <NavIcons/>
            </div>
        </div>
        {/* Bottom */}
        <div className='hidden h-12 md:flex border-black/5 
         pl-0.5 w-full 
        justify-start items-center 
        gap-5 font-medium
        text-main_text font text-sm
        
        '
        >
            <Link className=' hover:border-t-2 hover:border-b-2 hover:border-black' href={"/"}>Artworks</Link>
            <Link className=' hover:border-t-2 hover:border-b-2 hover:border-black' href={"/"}>sculpture</Link>
            <Link className=' hover:border-t-2 hover:border-b-2 hover:border-black' href={"/list"}>Painting</Link>
            <Link className=' hover:border-t-2 hover:border-b-2 hover:border-black' href={"/"}>Photographie</Link>
            <Link className=' hover:border-t-2 hover:border-b-2 hover:border-black' href={"/"}>Artists</Link>
        </div>
    </div>
  )
}

export default Navbar