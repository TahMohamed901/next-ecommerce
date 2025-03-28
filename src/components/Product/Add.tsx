"use client"
import{ useEffect, useState } from 'react'
import useCartStore from '@/hooks/useCartStore';

const Add = ({product}) => {
  const { addToCart, carts } = useCartStore();
  const inCart = carts.find(c => c.id === product.id);
  const maxQuantity = inCart? product.quantity - inCart.quantity : product.quantity;
  const [quantity, setQuantity] = useState(1);
  

  const handleQuantity = (type: "i" | "d") => {
      setQuantity((prev) => {
          if (type === "d" && prev > 1) return prev - 1;
          if (type === "i" && prev < maxQuantity) return prev + 1;
          return prev;
      });
  };
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
              disabled={quantity===1}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("i")}
              disabled={quantity===maxQuantity}
            >
              +
            </button>
          </div>
          {/* {stockNumber < 1 ? (
            <div className="text-xs">Product is out of stock</div>
          ) : ( */}
            <div className="text-xs">
            {maxQuantity === 0 ? (
              <span className="text-red-500 font-bold">Out of stock !</span>
            ): (
                <span>
                    Only <span className="text-orange-500">{maxQuantity - quantity} item{maxQuantity - quantity > 1 ? "s" : ""}</span> left!
                    <br /> {"Don't"} miss it
                </span>
            )}
            </div>
          {/* )} */}
        </div>
        <button
          onClick={() => maxQuantity > 0 && addToCart(product.id, quantity)}
          disabled={maxQuantity === 0}
          className="w-36 text-sm rounded-3xl ring-1 bg-black text-white py-2 px-4 hover:bg-black hover:text-orange-500 disabled:cursor-not-allowed disabled:bg-black  disabled:bg-opacity-60   disabled:text-white disabled:ring-none"
        >
          Add to Carts
        </button>
      </div>
    </div>
  )
}

export default Add