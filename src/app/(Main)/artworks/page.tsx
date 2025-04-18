"use client"
import  Masonry  from "@/components/Product/Masonry"
import Pagination from '@/components/Pagination/Pagination';
import { getAllProducts } from '@/lib/services/productServices';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductDTO } from "@/lib/types/productTypes";
const Page = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");
    const {data, error, isLoading} = useQuery({
        queryKey:["products", page],
        queryFn: () => getAllProducts(page-1, 10),
    })
    
    if(isLoading){
        return "Loading ..."
    }
    if(!data.content){
        return null
    }
    return(
        <div className='w-full flex-col justify-center items-center'>
            <Masonry products={data.content} />
            <Pagination totalPages={data.page.totalPages} />
        </div>
    )
}

export default Page