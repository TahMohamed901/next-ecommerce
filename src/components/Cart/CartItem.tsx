"use client";
import useCartStore from '@/hooks/useCartStore';
import { getProductById } from '@/lib/services/productServices'; // adapte le chemin si nécessaire
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CartItem {
  id: number;
  quantity: number;
}

interface ProductDTO {
  id: number;
  name: string;
  price: number;
  quantity: number;
  images: string[];
  description?: string;
}

const CartItem: React.FC<{ item: CartItem }> = ({ item }) => {
  const { removeFromCart } = useCartStore();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(item.id);
        setProduct(data);
      } catch (error) {
        console.error('Erreur lors du chargement du produit', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [item.id]);

  if (loading || !product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full flex gap-4 mt-2'>
      <Image
        src={`http://localhost:8080/files/images/${product.mainImage}`}
        alt={product.name}
        width={68}
        height={90}
        className='object-cover rounded-md'
      />
      <div className='w-full'>
        {/* Top */}
        <div>
          {/* Title */}
          <div className='flex items-center justify-between gap-8'>
            <h3 className='font-semibold'>{product.name}</h3>
            <div className='p-1 bg-gray-50 rounded-sm flex items-center gap-2'>
              $ {product.price}
            </div>
          </div>
          {/* Description */}
          <div className='text-sm text-gray-500'>
            available
          </div>
        </div>
        {/* Bottom */}
        <div className='flex justify-between text-sm'>
          <span className="text-gray-500">Qty. {item.quantity}</span>
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
