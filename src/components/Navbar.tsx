import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import Menu from '@/components/Menu'
import Searchbar from './Searchbar'
import NavIcons from './NavIcons'

const Navbar = () => {
  return (
      <div className='h-20 px-4 md:px-12 lg:px-12 xl:px:12 2xl:px-12 bg-slate-200 relative' >
        
        {/* Mobile */}
        <div className='md:hidden h-full flex justify-between items-center'>
        <Link href={"/"} >
        {/* <div className='text-2xl tracking-wide'>El Khaima</div> */}
        <Image src="/bg.png" alt='' width={100} height={75} />
        </Link>
        <Menu />
        </div>

        {/* Bigger screens */}
        <div className='hidden md:flex items-center justify-center gap-4 h-full'>
            {/* Left */}
            <div className='w-2/3 flex justify-start'>
                <Searchbar/>
            </div>

            {/* Center */}
            <div className='w-1/3'>
                <Link href={"/"} className='flex justify-center items-center'>
                <Image src="/bg.png" alt='' width={120} height={70} className='p-2'/>
                {/* <div className='text-2xl tracking-wide'>El Khaima</div> */}
                </Link>
            </div>

            {/* Right */}
            <div className='w-2/3 flex justify-end'>
                <NavIcons/>
            </div>
        </div>
    </div>
  )
}

export default Navbar