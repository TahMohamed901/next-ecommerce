import Banner from "@/components/Banner"
import CategoryList from "@/components/CategoryList"
import CustomProducts from "@/components/CustomProducts"
import ProductList from "@/components/ProductList"
import Link from "next/link"
import { photographies } from "@/lib/products"
import { accessories } from "@/lib/products"
const HomePage = () => {
  return (
    <>
    {/* <Slider /> */}
    <Banner />


    {/* Product Catalogue  1 */} 
    <div className="pt-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-50">

    <div className="flex justify-between items-end max-sm:flex-col max-sm:justify-center max-sm:items-start">
      <div className="">
      <h1 className="text-2xl font-medium">Bestsellers</h1>
      <p className="text-sm">Discover artworks our collectors love</p>
      </div>
      <Link href={"/list"}>
        <h6 className="underline max-sm:mt-8">All Artworks</h6>
        <p></p>
      </Link>
      
    </div>

    {/* <ProductList/> */}
    <CustomProducts />
    </div>


    {/* Product Catalogue  2 */}  
    <div className="mt-24">
    <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">Categoies</h1>
    {/* <CategoryList/> */}
    </div>


    {/* Product Catalogue  2 */} 
    <div className="pt-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-50">

    <div className="flex justify-between items-end max-sm:flex-col max-sm:justify-center max-sm:items-start">
      <div className="">
      <h1 className="text-2xl font-medium">Photographies</h1>
      <p className="text-sm">Discover the bests photographies</p>
      </div>
      <Link href={"/list"}>
        <h6 className="underline max-sm:mt-8">All Artworks</h6>
        <p></p>
      </Link>
      
    </div>

    {/* <ProductList/> */}
    {/* <CustomProducts /> */}
    </div>
    </>
  )
}

export default HomePage