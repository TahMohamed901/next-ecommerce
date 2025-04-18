import React from 'react'
import CartPageBody from '../Cart/CartPageBody'
import CartPageRight from '../Cart/CartPageRight'
import Link from 'next/link'
type Props = {
    setStep: (step: "Cart" | "Addresses" | "Confirmation" | "Success" | "Fail") => void
}
const Cart = ({ setStep }: Props) => {
    const next =()=>{
        setStep("Addresses")
    }
    return (
        <div className="w-full sm:flex pb-20">
        {/* left */}
        <div className="bg-gray-100 sm:w-2/3 m-2 border-zinc-500 border-2">
            <h1 className=" border-zinc-500 border-b-2 text-center font-semibold ">Your Cart</h1>
            <CartPageBody />
        </div>
        {/* right */}
        <div className="bg-gray-100 sm:w-1/3 m-2 h-fit">
            <h1 className="p-2 font-semibold">Total</h1>
            <CartPageRight />
            <div className='p-4 flex justify-between text-sm'>
            <Link href={"/artworks"} >
            <button className='rounded-md py-3 px-4 ring-2 ring-gray-600 font-medium'>
                Continue Browsing
            </button>
            </Link>
            
            <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                // disabled={isLoading}
                onClick={next}
                >
                    Checkout
            </button>
            </div>
        </div>
        </div>
    )
}

export default Cart