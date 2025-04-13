"use client"
import MuiPagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
    totalPages: number;
};
const Pagination = ({ totalPages }: Props) => {
    
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentPage = parseInt(searchParams.get("page") || "1");
    const [page, setPage] = useState(currentPage);

    useEffect(() => {
        setPage(currentPage);
    }, [currentPage]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", value.toString());
    router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className='my-5 w-full flex justify-center items-center'>
            <MuiPagination page={page} count={totalPages} variant="outlined" shape="rounded" onChange={handleChange} />
        </div>
    )
}

export default Pagination