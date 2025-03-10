"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
const Menu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className="">
        <Image 
            src="/menu.png" 
            alt="" 
            width={28} 
            height={28} 
            className="cursor-pointer" 
            onClick={()=>{setOpen((prev)=> !prev)}} 
        />
        {open && (
            <div className="absolute bg-black text-white left-0 top-0 w-[40vh] h-[100vh] flex flex-col z-10">
                {/* Top */}
                <div className="flex justify-end items-center border-b">
                    <span className="mr-4 mt-2 text-xl cursor-pointer" 
                    onClick={()=>{setOpen((prev)=> !prev)}} 
                    >x</span>
                </div>
                {/* Mid */}
                <div className="mt-5 flex flex-col gap-3 pl-3">
                <Link href={"/"}>Home</Link>
            <Link href={"/list"}>Shop</Link>
            <Link href={"/"}>Deals</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
                </div>
            </div>
        )

        }
    </div>
  )
}

export default Menu