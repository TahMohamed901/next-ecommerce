import ProductsList from '@/components/Product/ProductsList'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "El Khaima | Artworks ",
    description: "El Khaima home page ",
  };
const page = () => {



    return (
        <div>
            <ProductsList />
        </div>
    )
}

export default page