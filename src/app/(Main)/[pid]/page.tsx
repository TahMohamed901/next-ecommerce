"use client"
import Add from '@/components/Product/Add'
import ProductDetails from '@/components/Product/SingleProduct/ProductDetails'
import ProductImages from '@/components/Product/SingleProduct/ProductImages'
import { allProducts } from '@/lib/products'
import { getProductById } from '@/lib/services/productServices'
import { useQuery } from '@tanstack/react-query'
// Single Product
const SingleProduct = ({ params }: { params: { pid: string } }) => {
    return (
        <div 
        // className='pt-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col md:flex-row gap-8'
        className='py-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col md:flex-row gap-8'
        >
        {/* IMG */}
            <div 
            className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 '
            >
            <ProductImages pId={parseInt(params.pid)}/>
            </div>

        {/* Details */}
            <div className='sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col gap-6'>
        {/* Separator */} <div className='sm:hidden h-[2px] bg-gray-100'/>
            <ProductDetails pId={parseInt(params.pid)} />
            <Add pid ={parseInt(params.pid)} />
            </div>
        </div>
    )
}

export default SingleProduct ;