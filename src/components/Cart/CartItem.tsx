import useCartStore from '@/hooks/useCartStore';
import { allProducts } from '@/lib/products';
import Image from 'next/image'

interface CartItem{
    id:string;
    price:number;
    quantity:number;
    stock:number;
}
const CartItem:React.FC<{ item: CartItem }>  = ({item}) => {
    const {removeFromCart} = useCartStore();
    const product = allProducts.data.find(p => p.id === item.id) ?? null;
    return (
    <div className='w-full flex gap-4'>
        <Image 
        src={product?.images[0] || "" } 
        alt={product?.name || ""} 
        width={68} 
        height={90} 
        className='object-cover rounded-md'/>
        <div className='w-full'>
            {/* Top */}
            <div>
                {/* Title */}
                <div className='flex items-center justify-between gap-8'>
                    <h3 className='font-semibold'>{product?.name || "Product Name" }</h3>
                    <div className='p-1 bg-gray-50 rounded-sm flex items-center gap-2'>$ {item.price}</div>
                </div>
                {/* Description */}
                <div className='text-sm text-gray-500'>
                    available
                </div>
            </div>
            {/* Bottom */}
            <div className='flex justify-between text-sm'>
                <span className="text-gray-500">Qty. {item.quantity}</span>
                <span className="text-blue-500" onClick={()=> removeFromCart(item.id)} >Remove</span>
            </div>
        </div>
    </div>
  )
}

export default CartItem