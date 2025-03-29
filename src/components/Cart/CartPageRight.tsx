"use client"
import useCartStore from '@/hooks/useCartStore';
import { useEffect, useState } from 'react';
const CartPageRight = () => {
    const { carts, getTotalCost } = useCartStore();
    const [total, setTotal] = useState(0.00);
    const [numberOfItems, setNumberOfItems] = useState(0);
    useEffect(() => {
        setTotal(getTotalCost());
        const totalItems = carts.reduce((sum, item) => sum + item.quantity, 0);
        setNumberOfItems(totalItems);
    }, [getTotalCost,carts]);
    return (
        <div>
            <div className='flex justify-between p-4'>
                <h1 className='font-light'>{numberOfItems} items</h1>
                <h1 className='font-light'>$ {total}</h1>
            </div>
            <div className='flex justify-between p-4'>
                <h1 className='font-medium'>Subtotal:</h1>
                <h1 className='font-normal'>$ {total}</h1>
            </div>
            {/* <div className='flex justify-between p-4'>
                <h1 className='font-medium'>Delivery:</h1>
                <h1 className='font-normal'>$ 197</h1>
            </div> */}
        </div>
    )
}

export default CartPageRight