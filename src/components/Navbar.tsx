import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import Menu from '@/components/Menu'
import Searchbar from './Searchbar'
import NavIcons from './NavIcons'

const Navbar = () => {
  return (
      <div className='h-20 px-4 md:px-16 lg:px-16 xl:px:16 2xl:px-16 bg-slate-200 relative' >
        
        {/* Mobile */}
        <div className='md:hidden h-full flex justify-between items-center'>
        <Link href={"/"} >
        {/* <div className='text-2xl tracking-wide'>El Khaima</div> */}
        <Image src="/bg.png" alt='' width={100} height={75} />
        </Link>
        <Menu />
        </div>

        {/* Bigger screens */}
        <div className='hidden md:flex items-center justify-center gap-8 h-full'>
            {/* Left */}
            <div className="w-1/3 md:1/3 xl:w-1/2 flex items-center gap-12">
                <Link href={"/"} className='flex items-center'>
                <Image src="/bg.png" alt='' width={120} height={70} className='p-2'/>
                {/* <div className='text-2xl tracking-wide'>El Khaima</div> */}
                </Link>
                <div className="hidden xl:flex gap-4">
                    <Link href="/">Homepage</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
            </div>
            {/* Right */}
            <div className='w-2/3 flex justify-between items-center gap-8'>
                <Searchbar/>
                <NavIcons/>
            </div>
        </div>
    </div>
  )
}

export default Navbar