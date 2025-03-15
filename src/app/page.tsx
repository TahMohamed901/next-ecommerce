import Banner from "@/components/Banner"
import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import Link from "next/link"

const HomePage = () => {
  return (
    <>
    {/* <Slider /> */}
    <Banner />


    {/* Product Catalogue  1 */} 
    <div className="pt-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-neutral-600/10">
    <div className="flex justify-between items-end">
      <h1 className="text-2xl">Featured Products</h1>
      <Link href={"/list"}>
        <h6 className="underline">See All</h6>
      </Link>
      
    </div>
    <ProductList/>
    </div>


    {/* Product Catalogue  2 */}  
    <div className="mt-24">
    <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">Categoies</h1>
    {/* <CategoryList/> */}
    </div>


    {/* Product Catalogue  3 */} 
    <div className="pt-10 mt-24 mb-2 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  bg-neutral-600/10">
    <div className="flex justify-between items-end">
      <h1 className="text-2xl">Featured Products</h1>
      <Link href={"/list"}>
        <h6 className="underline">See All</h6>
      </Link>
      
    </div>
    <ProductList/>
    </div>
    </>
  )
}

export default HomePage