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
            
            className="absolute bg-white text-black left-0 top-0 w-full h-[100vh] flex flex-col trz"
            >
                {/* Top */}
                <div className="flex justify-between items-end pb-2 h-16 px-4 border-b-2">
                    <div className="flex justify-start items-end w-2/5 h-10 pb-1">
                        <Link href={"/"} >
                        <Image src="/logo/logo-1_2.png" alt='' width={152.8} height={100} priority />
                        </Link>
                    </div>
                    <div className="flex w-3/5 justify-end items-center">
                    <Image 
                        src="/icons/close.svg" 
                        alt="" 
                        width={27} 
                        height={22} 
                        priority
                        className="cursor-pointer" 
                        onClick={() => setOpen((prev) => !prev)} 
                    />
                    </div>
                </div>
                {/* Mid */}
                <div className="mt-5 flex flex-col  bg-white  h-[100vh]">
                    <div className="flex flex-col gap-6 px-3 border-b border-black pb-10">
                        {mobileMenu.map((item, index )=> (
                            <div className=" border-black underline">
                                <Link  key={index} href={item.link} onClick={()=>{setOpen(false)}} >{item.title}</Link>
                            </div>
                        ))}
                    </div>
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