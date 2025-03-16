"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
const Menu = () => {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (open) {
            // document.body.classList.add("no-scroll");
            document.documentElement.classList.add("no-scroll");
        } else {
            // document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
        }
        
        return () => {
            document.body.classList.remove("no-scroll");
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
                {/* Overlay pour bloquer les interactions sur la page */}
                {open && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 h-[100vh] z-90" onClick={() => setOpen(false)} />
                )}
        
        {open && (
            <div className="fixed  bg-white text-black left-0 top-0 w-[100vw] h-[100vh]  flex flex-col z-100">
                {/* Top */}
                <div className="flex justify-end items-center border-b">
                    <span className="mr-4 mt-2 text-xl cursor-pointer" 
                    onClick={()=>{setOpen((prev)=> !prev)}} 
                    >x</span>
                </div>
                {/* Mid */}
                <div className="mt-5 flex flex-col gap-3 pl-3">
                <Link href={"/"} onClick={()=>{setOpen(false)}} >Home</Link>
                <Link href={"/list"} onClick={()=>{setOpen(false)}} >Shop</Link>
                <Link href={"/"} onClick={()=>{setOpen(false)}} >Deals</Link>
                <Link href={"/"} onClick={()=>{setOpen(false)}} >About</Link>
                <Link href={"/"} onClick={()=>{setOpen(false)}} >Contact</Link>
                </div>
            </div>
        )

        }
    </div>
  )
}

export default Menu