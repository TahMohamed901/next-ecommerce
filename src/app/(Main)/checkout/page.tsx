import CartPageBody from "@/components/Cart/CartPageBody"
import CartPageRight from "@/components/Cart/CartPageRight"
import { BreadCrumb } from "@/components/shared/BreadCrumb";
import Link from 'next/link';

const page = () => {
  return (
    <>
    <div className="py-5 px-2">
      <BreadCrumb current="cart" />
    </div>
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
              // onClick={handleCheckout}
              >
              <Link href={"/checkout/addresses"} >
                  Checkout
              </Link>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default page