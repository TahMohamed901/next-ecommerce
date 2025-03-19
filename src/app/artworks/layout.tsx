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
        <div className="pt-2 flex gap-4">
            
            <div className="max-md:hidden w-1/5 bg-slate-400">
            left bar
            </div>
            <div className="w-full">
              <div className="bg-gray-700">Filter</div>
              {children}
            </div>
        </div>
    )
}

export default ArtworksLayout