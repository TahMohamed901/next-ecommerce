"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { mobileMenu } from "@/lib/menu"
const Menu = () => {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (open) {
            // document.body.classList.add("no-scroll");
            document.documentElement.classList.add("no-scroll");
            document.documentElement.style.overflow = "hidden";
        } else {
            // document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
            document.documentElement.style.overflow = "auto";
        }
        
        return () => {
            document.body.classList.remove("no-scroll");
            document.documentElement.style.overflow = "auto";
        };
    }, [open]);
  return (
    <div className="">
        <Image 
            src="/icons/menu.png" 
            alt="" 
            width={28} 
            height={28} 
            className="cursor-pointer" 
            onClick={()=>{setOpen((prev)=> !prev)}} 
        />
    <div className="">

        {open && (
            <>
            {/* <div className="fixed inset-0 bg-black bg-opacity-50 h-[100vh] zi-100" onClick={() => setOpen(false)} /> */}
            <div 
            
            className="absolute bg-white text-black left-0 top-0 w-full h-screen flex flex-col trz"
            >
                {/* Top */}
                <div className="flex justify-end items-center border-b">
                    <span className="mr-4 mt-2 text-xl cursor-pointer" 
                    onClick={()=>{setOpen((prev)=> !prev)}} 
                    >x</span>
                </div>
                {/* Mid */}
                <div className="mt-5 flex flex-col gap-3 pl-3 bg-white  h-[100vh]">
                {mobileMenu.map((item, index )=> (
                    <Link key={index} href={item.link} onClick={()=>{setOpen(false)}} >{item.title}</Link>
                ))}
                </div>
            </div>
            </>
        )

        }
    </div>
    </div>
  )
}

export default Menu