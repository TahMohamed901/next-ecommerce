"use client"
import MuiPagination from '@mui/material/Pagination';
import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const Pagination = () => {
    const [page, setPage] = useState(1);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", value.toString());
        router.push(`${pathname}?${params.toString()}`);
    };
    return (
        <div className='my-5 w-full flex justify-center items-center'>
            <MuiPagination count={120} variant="outlined" shape="rounded" onChange={handleChange} />
        </div>
    )
}

export default Pagination