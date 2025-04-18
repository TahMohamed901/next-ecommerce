import Filter from "@/components/Filter/Filter";
import MobileFilter from "@/components/Filter/MobileFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El Khaima | Home ",
  description: "El Khaima home page ",
};

const ArtworksLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
    <div className="mx-auto md:w-4/5"> 
      {/* Sidebar */}
        <div className="px-4 pt-8 py-4 max-sm:hidden">
          {/* <DesktopTabletFilter/> */}
          {/* <Filter/> */}
        </div>
      {/* Contenu principal */}
      <div className="flex-1 px-2 w-full">
          {children}
          <div className="md:hidden">             
            <MobileFilter />
          </div>
      </div>
    </div>
    )
}

export default ArtworksLayout