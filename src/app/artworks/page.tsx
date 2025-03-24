import ProductsList from '@/components/Product/ProductsList'
import  Masonry  from "@/components/Product/Masonry"
import { Metadata } from 'next';
import {bestsellers, photographies, accessories} from "@/lib/products"
import Pagination from '@/components/Pagination/Pagination';
const page = () => {
    // return (<ProductsList />)
    return(
        <div className='w-full flex-col justify-center items-center'>
            <Masonry category={bestsellers} />
            <Pagination  />
        </div>
    )
}

export default page