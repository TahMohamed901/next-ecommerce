
import CartItem from '@/components/Cart/CartItem';
import useCartStore from '@/hooks/useCartStore';
import { allProducts } from '@/lib/products';
import { Box } from '@mui/material';
import Link from 'next/link';
const CartModal = () => {

    const { carts, getTotalCost } = useCartStore();

    return (
        <div className='mycart w-max absolute p-4 rounded-sm shadow-[0_3px_10px_rgb(0,0,0,0.1)] bg-white top-[82px] right-0 flex flex-col gap-6 z-20'>
            {!carts.length  ? 
            (
            <div className="">Cart is Empty</div>
            ):
            (
            <>
            <h2 className="text-xl">Shopping Cart</h2>
            <div className='flex flex-col gap-8'>
                {/* Items */}
                <Box
                    sx={{
                        overflowY: "scroll",
                        "&::-webkit-scrollbar": { display: "none" },
                        scrollbarWidth: "none",
                        maxHeight:"30vh",
                        borderBottom: "1px solid black",
                        borderTop: "1px solid black",
                        paddingBottom:"10px"
                    }}
                >
                {carts.map((item,index) =><div key={index}><CartItem item={item} /></div> )}
                </Box>

                {/* Bottom */}
                {carts.length > 0 &&
                <div className=''>
                    <div className='flex items-center justify-between font-semibold'>
                        <span>Subtotal</span>
                        <span>${getTotalCost()}</span>
                    </div>
                    <p className='text-gray-500 text-sm mt-2 mb-4'>
                        Lorem ipsum dolor sit amet consectetur ...
                    </p>
                    <div className='flex justify-between text-sm'>
                        <Link href={"/checkout"} >
                        <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>
                            View Cart
                        </button>
                        </Link>
                        
                        <button
                            className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                            // disabled={isLoading}
                            // onClick={handleCheckout}
                        >
                            <Link href={"/checkout"} >
                                Checkout
                            </Link>
                        </button>
                    </div>
                </div>
                }
            </div>
            </>
            )

            }
        </div>
    )
}

export default CartModal