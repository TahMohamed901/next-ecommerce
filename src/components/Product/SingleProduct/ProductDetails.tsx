"use client"

import { getProductById } from "@/lib/services/productServices";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

interface ProductDetailsProps {
    pId: number;
  }
const ProductDetails: FC<ProductDetailsProps>= ({pId}) => {
    const {data: product, error, isLoading} = useQuery({
        queryKey:["product"],
        queryFn: () => getProductById(pId),
    })
    console.log(product)
    if (isLoading) return <p>Chargement...</p>;
    if (error || !product) return <p>Erreur de chargement du produit</p>;
    return (
        <>
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        {/* Separator */} <div className='h-[2px] bg-gray-100' />
        <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
                ${product.price - 20}
            </h3>
            <h2 className="font-medium text-2xl">
                ${product.price}
            </h2>
        </div>
        {/* Separator */} <div className='h-[2px] bg-gray-300' />
        </>
    )
}

export default ProductDetails