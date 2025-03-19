import Filter from "@/components/Filter/Filter";
import MobileFilter from "@/components/Filter/MobileFilter";
import type { Metadata } from "next";


const ArtworksLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <div className="pt-2 flex">
            
            <div className="max-md:hidden w-1/5 bg-slate-400">
            left bar
            </div>
            <div className="w-full px-2">
              <div className="max-sm:hidden">
                <Filter/>
              </div>
              <div className="md:hidden">
                <div>test</div>
                <div>
                <MobileFilter />
                </div>
              </div>
              {/* <div className="filter flex justify-center text-white">
                <button className="mb-4 bg-black p-1.5 rounded-md w-[110px]">Filter</button>
              </div> */}
              {children}
            </div>
        </div>
    )
}

export default ArtworksLayout