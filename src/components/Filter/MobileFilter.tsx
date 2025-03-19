"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MobileFilter = () => {
    const [open, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
        type: "",
        cat: "",
        min: "",
        max: "",
        sort: ""
    });

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    // ✅ Met à jour les valeurs des champs en fonction de l'URL
    useEffect(() => {
        if (!open) return; // Ne met à jour que si le menu est ouvert

        setFilters({
            type: searchParams.get("type") || "all",
            cat: searchParams.get("cat") || "all",
            min: searchParams.get("min") || "",
            max: searchParams.get("max") || "",
            sort: searchParams.get("sort") || "all",
        });
    }, [open, searchParams]);

    // ✅ Réinitialiser les filtres
    const handleReset = () => {
        const params = new URLSearchParams(searchParams.toString());
        ["type", "min", "max", "cat", "sort"].forEach((param) => params.delete(param));

        router.push(`${pathname}`);
        setIsOpen(false);
    };

    // ✅ Met à jour l'URL lors d'un changement de filtre
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        const params = new URLSearchParams(searchParams.toString());

        if (!value || value === "all") {
            params.delete(name);
        } else {
            params.set(name, value);
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    return !open ? (
        <div 
        className="filter flex justify-center text-white"
        
        >
            <button 
                className="mb-4 bg-black p-1.5 rounded-md w-[110px]"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                Filter
            </button>
        </div>
    ) : (
        <div 
            className="fixed p-4 rounded-sm shadow-[0_3px_10px_rgb(0,0,0,0.4)] bg-slate-50 h-auto top-25 right-2 left-2 flex flex-col justify-between pb-20 z-50"
        >
            <div>
                <Image 
                    src="/icons/close.svg" 
                    alt="" 
                    width={22} 
                    height={22} 
                    className="cursor-pointer absolute top-2 right-3" 
                    onClick={() => setIsOpen((prev) => !prev)} 
                />
                <div className="flex justify-between pt-5 border-b border-black pb-5 text-[16px]">
                    <h1>Filters</h1>
                    <h1 onClick={handleReset} className="pr-8 font-medium cursor-pointer">Reset filters</h1>
                </div>
                {/* Type */}
                <div className="flex justify-between py-3 text-[16px]">
                    <h1 className="font-semibold">Type</h1>
                    <select
                        name="type"
                        className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
                        onChange={handleFilterChange}
                        value={filters.type}
                    >
                        <option value="all">all</option>
                        <option value="physical">Physical</option>
                        <option value="digital">Digital</option>
                    </select>
                </div>
                {/* Category */}
                <div className="flex justify-between py-3 text-[16px]" >
                    <h1 className="font-semibold">Category</h1>
                    <select
                        name="cat"
                        className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
                        onChange={handleFilterChange}
                        value={filters.cat}
                    >
                        {(filters.cat !== "") ? (<option value={filters.cat}>{filters.cat}</option>) : 
                        (<option value="All">All</option>)}
                        <option value="New_Arrival">New Arrival</option>
                        <option value="Popular">Popular</option>
                    </select>
                </div>
                {/* Price */}
                <div className="flex justify-between items-center py-4 text-[16px]">
                    <h1 className="font-semibold">Price</h1>
                    <div className="flex justify-between gap-3">
                    <input
                    type="text"
                    name="min"
                    placeholder="min price"
                    className="text-xs rounded-2xl pl-2 w-32 py-1 ring-1 ring-gray-500 text-[16px]" 
                    onChange={handleFilterChange}
                    />

                    <input
                    type="text"
                    name="max"
                    placeholder="max price"
                    className="text-xs rounded-2xl pl-2 w-32 py-1 ring-1 ring-gray-500 text-[16px]" 
                    onChange={handleFilterChange}
                    />
                    </div>
                </div>
                {/* Sort */}
                <div className="flex justify-between border-t border-black pt-2 text-[16px]">
                    <h1 className="font-semibold">Sort</h1>
                    <select
                        name="sort"
                        className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
                        onChange={handleFilterChange}
                        value={filters.sort}
                    >
                        <option value="all">Sort By</option>
                        <option value="asc price">Price (low to high)</option>
                        <option value="desc price">Price (high to low)</option>
                        <option value="asc lastUpdated">Newest</option>
                        <option value="desc lastUpdated">Oldest</option>
                    </select>
                </div>
                {/* Button */}
                <div className="flex justify-center text-[16px] ">
                    <button 
                        className="mb-4 text-white bg-zinc-800 px-5 py-2 rounded-sm w-auto absolute bottom-0 font-light zi-200"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        Display Result
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MobileFilter;
