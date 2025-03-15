import Image from 'next/image'
import React from 'react'

const CartItem = () => {
  return (
    <div className='flex gap-4'>
        <Image 
        src="/products/accessories/p3.jpg" 
        alt="" 
        width={72} 
        height={96} 
        className='object-cover rounded-md'/>
        <div>
            {/* Top */}
            <div>
                {/* Title */}
                <div className='flex items-center justify-between gap-8'>
                    <h3 className='font-semibold'>Product Name</h3>
                    <div className='p-1 bg-gray-50 rounded-sm flex items-center gap-2'>$120</div>
                </div>

                {/* Description */}
                <div className='text-sm text-gray-500'>
                    available
                </div>
            </div>
            {/* Bottom */}
            <div className='flex justify-between text-sm'>
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500" >Remove</span>
            </div>
        </div>
    </div>
  )
}

export default CartItem