import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import Menu from '@/components/Menu'
import Searchbar from './Searchbar'
import NavIcons from './NavIcons'

const Navbar = () => {
  return (
      <div className='h-auto px-4 md:px-12 lg:px-12 xl:px:12 2xl:px-12 relative' >
        {/* Mobile */}
        <div className='md:hidden h-full flex-col justify-between items-center py-2'>
            {/* Top */}
            {/* Mid */}

            {/* Bottom */}
            <div className='flex justify-between items-center mt-1 '>
                <div className='flex justify-center items-center w-1/3'>
                    <Link href={"/"} >
                    <Image src="/w-logo.png" alt='' width={120} height={50} className='p-2'/>
                    </Link>
                </div>
                <div className='flex'>
                <NavIcons/>
                <Menu/>
                </div>
            </div>

            <div>
            <Searchbar/>
            </div>
        </div>

        {/* Desktop screens */}
        {/* Top */}
        <div className='hidden md:flex items-center justify-center gap-12 '>
            {/* Left */}
            <div className='w-1/3 flex justify-start'>
                <Link href={"/"} className='flex justify-center items-center'>
                <Image src="/w-logo.png" alt='' width={120} height={50} className='p-2'/>
                
                </Link>
            </div>

            {/* Center */}
            <div className='w-2/3'>
                <Searchbar/>
            </div>

            {/* Right */}
            <div className='w-1/3 flex justify-end'>
                <NavIcons/>
            </div>
        </div>
        {/* Bottom */}
        <div className='hidden md:flex border-t border-black pt-2 pb-2 w-full  justify-center items-center gap-10 font-regular'>
            <Link href={"/"}>Home</Link>
            <Link href={"/list"}>Shop</Link>
            <Link href={"/"}>Deals</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar