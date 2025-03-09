import React from 'react'
import CartItem from './CartItem';

const CartModal = () => {
    const cartItems = true;

  return (
    <div className='mycart w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
        {!cartItems ? 
        (
        <div className="">Cart is Empty</div>
        ):
        (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
        <div className='flex flex-col gap-8'>
            {/* Items */}
            <div className='flex flex-col gap-8'>
                <CartItem />
                <CartItem />
            </div>

            {/* Bottom */}
            <div className=''>
                <div className='flex items-center justify-between font-semibold'>
                    <span>Subtotal</span>
                    <span>$120</span>
                </div>
                <p className='text-gray-500 text-sm mt-2 mb-4'>
                    Lorem ipsum dolor sit amet consectetur ...
                </p>
                <div className='flex justify-between text-sm'>
                    <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>
                        View Cart
                    </button>
                    <button
                        className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                        // disabled={isLoading}
                        // onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
        </>
        
        )

        }
    </div>
  )
}

export default CartModal