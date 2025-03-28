"use client"

import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import CartModal from "@/components/Cart/CartModal";
import useCartStore from '@/hooks/useCartStore';
const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { carts } = useCartStore();
  const isLoggedIn = true;
  const [itemCounter, setItemCounter] = useState(carts.length)
  console.log(itemCounter)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".mycart") &&
        !target.closest(".myprofile")
      ) {
        setIsProfileOpen(false);
        setIsCartOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
      if(isCartOpen){
        setIsCartOpen(false)
      }
    }
  };
  const handleCart = () => {
      setIsCartOpen((prev) => !prev);
      if(isProfileOpen){
        setIsProfileOpen(false)
      }
    
  };
  const handleFavorite = () => {
    setIsCartOpen((prev) => !prev);
    if(isProfileOpen){
      setIsProfileOpen(false)
    }
  
};

  const handleLogout = () => {
    // setIsProfileOpen(false);
    setIsLoading(true);
    Cookies.remove("refreshToken");
    // const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    
    router.push("/login");
  };
  return (
    <div className="flex items-center gap-4 relative pr-5">
        

        {/* <Image src="/notification.png" alt="" width={22} height={22} className="cursor-pointer" /> */}
        {/* Profile */}
        <div 
        className="myprofile flex gap-2 items-end cursor-pointer"
        onClick={handleProfile}
        >
          <Image src="/icons/accountIcon.svg" alt="" width={27} height={28} className="cursor-pointer relative"/>
          {isProfileOpen && (
          <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
            <Link href="/login">Profile</Link>
            <div className="myprofile mt-2 cursor-pointer" onClick={handleLogout}>
              {isLoading ? "Logging out" : "Logout"}
            </div>
          </div>
          )}
          {/* <h3 className="hidden lg:flex font-semibold">Login</h3> */}
        </div>
        {/* Favorite*/}
        <div 
        className="myfavorite flex gap-2 items-end cursor-pointer"
        onClick={handleProfile}
        >
          <Image src="/icons/favoriteIcon.svg" alt="" width={27} height={28} className="cursor-pointer relative"/>
          {isProfileOpen && (
          <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
            <Link href="/login">Profile</Link>
            <div className="myprofile mt-2 cursor-pointer" onClick={handleLogout}>
              {isLoading ? "Logging out" : "Logout"}
            </div>
          </div>
          )}
          {/* <h3 className="hidden lg:flex font-semibold">Login</h3> */}
        </div>
        {/* Cart */}
        <div className="mycart flex gap-2 items-end cursor-pointer"
        onClick={handleCart}
        >
          <div className="relative">
            <Image src="/icons/cartIcon.svg" alt="" width={27} height={25} className=""/>
            {carts.length > 0 && 
            <div className="absolute -top-0 -right-2  w-5 h-5 bg-main_text rounded-full text-white text-sm flex items-center justify-center">
                {carts.length}
            </div>
            }
          </div>
        </div>
        {isCartOpen && <CartModal />}
    </div>
  )
}

export default NavIcons