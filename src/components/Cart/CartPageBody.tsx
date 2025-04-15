"use client"
import useCartStore from '@/hooks/useCartStore';
import { allProducts } from '@/lib/products';
import { getProductById } from '@/lib/services/productServices';
import { ProductDTO } from '@/lib/types/productTypes';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CartPageBody = () => {
    const { carts, getTotalCost } = useCartStore();
    return (
        <div>
            {!carts.length  && <div className="">Cart is Empty</div>}

            {carts.length > 0 &&
            <div className="max-sm:px-2 sm:p-10">
                {carts.map((item,index) => <div key={index}><CartPageBodyItem item={item} /></div>)}
            </div>
            }
        </div>
    )
}


interface Item{
    id:number;
    quantity:number;
}
const CartPageBodyItem:React.FC<{ item: Item }> = ({item})=>{
    const {removeFromCart, increaseQuantity, decreaseQuantity} = useCartStore();
    const [product, setProduct] = useState<ProductDTO | null>(null);
    const router = useRouter();
    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const data = await getProductById(item.id);
            setProduct(data);
          } catch (error) {
            console.error(`Erreur lors de la récupération du produit ${item.id}:`, error);
          }
        };
        fetchProduct();
      }, [item.id]);
      const gotoProduct = ()=>{
        router.push(`/${item.id}`)
      }
    const maxQuantity = product?.stock;
    return (
        <div className='w-full flex gap-4 mt-2 h-40'>
            <div className=''>
                <Image 
                src={`http://localhost:8080/files/images/${product?.mainImage} `} 
                alt={product?.name || ""} 
                width={100} 
                height={10} 
                className='object-cover rounded-md h-28 w-32 cursor-pointer'
                onClick={gotoProduct}
                />
            </div>
            <div className='flex w-full justify-between max-sm:gap-2'>
                <div className='sm:w-1/5 '>
                    <h3 className='font-semibold'>{product?.name || "Product Name" }</h3>
                    <div className='text-sm text-gray-500'>
                    {product?.description
                        ? product.description.length > 10
                        ? product.description.slice(0, 0) + "..."
                        : product.description
                        : ""}
                    </div>
                    <div className='p-1 rounded-sm flex items-center gap-2 font-semibold'>$ {product?.price}</div>
                    <div className='p-1 rounded-sm flex items-center  font-light'>x {item.quantity}</div>
                </div>

                <div className='sm:3/5 '>
                    <div className="bg-gray-100 py-2 px-4 rounded-3xl flex max-sm:w-24 items-center justify-between w-32">
                        <button
                        className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity===1}
                        >
                        -
                        </button>
                        {item.quantity}
                        <button
                        className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
                        onClick={() => increaseQuantity(item.id)}
                        disabled={item.quantity===maxQuantity}
                        >
                        +
                        </button>
                    </div>
                </div>

                <div className='sm:w-1/5  text-right'>
                    <div className='p-1rounded-sm flex justify-end gap-2'>$ {product && product.price * item.quantity}</div>
                    <span className="text-blue-500 cursor-pointer max-sm:text-sm" onClick={()=> removeFromCart(item.id)} >Remove</span>
                </div>
            </div>
        </div>
    )
    
}
export default CartPageBody