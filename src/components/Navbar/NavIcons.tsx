"use client"

import Image from "next/image"
import Link from "next/link";
import { use, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import CartModal from "@/components/Cart/CartModal";
import useCartStore from '@/hooks/useCartStore';
import { useAuthStore } from "@/hooks/useAuthStore";
const NavIcons = () => {
  const {user,fetchUser, logout} = useAuthStore()
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { carts } = useCartStore();
  const isLoggedIn = true;
  const [itemCounter, setItemCounter] = useState(0)
  
  useEffect(() => {
    const loadUser = async () => {
      await fetchUser();
    };
  
    loadUser();
  }, []);
  useEffect(() => {
    const totalQuantity = carts.reduce((total, item) => total + item.quantity, 0);
    setItemCounter(totalQuantity);
  }, [carts]);
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

  const handleProfile = async() => {
    await fetchUser(); // Vérifie l'authentification à chaque clic
    if (!isLoggedIn) {
      router.push("/");
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

  const handleLogout = async () => {
    await logout()
    router.push("/");
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
              <div className="absolute px-3 py-3 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                {user ? (
                  <>
                    <Link href="/profile" className="block mb-2">Profile</Link>
                    <Link href="/Orders" className="block mb-2">MyOrders</Link>
                  {
                    (user.role === "artisan" || user.role === "artisan") && <Link href="/Orders" className="block mb-2">Dashboard</Link>
                  }
                  <div className="myprofile cursor-pointer" onClick={handleLogout}>
                    {isLoading ? "Logging out..." : "Logout"}
                  </div>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="block mb-2">Login</Link>
                    <Link href="/register" className="block mb-2">Register</Link>
                  </>
                )}
              </div>
          )}
          {/* <h3 className="hidden lg:flex font-semibold">Login</h3> */}
        </div>
        {/* Favorite*/}
        <div 
        className="myfavorite flex gap-2 items-end cursor-pointer"
        // onClick={handleProfile}
        >
          <Image src="/icons/favoriteIcon.svg" alt="" width={27} height={28} className="cursor-pointer relative"/>
        </div>
        {/* Cart */}
        <div className="mycart flex gap-2 items-end cursor-pointer"
        onClick={handleCart}
        >
          <div className="relative">
            <Image src="/icons/cartIcon.svg" alt="" width={27} height={25} className=""/>
            {carts.length > 0 && 
            <div className="absolute -top-0 -right-2  w-5 h-5 bg-main_text rounded-full text-white text-sm flex items-center justify-center">
                {itemCounter}
            </div>
            }
          </div>
        </div>
        {isCartOpen && <CartModal />}
    </div>
  )
}

export default NavIcons