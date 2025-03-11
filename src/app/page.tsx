import Banner from "@/components/Banner"
import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <>
    {/* <Slider /> */}
    <Banner />

    <div className="mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
    <h1 className="text-2xl">Featured Products</h1>
    <ProductList/>
    </div>

    {/* <div className="mt-24">
    <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categoies</h1>
    <CategoryList/>
    </div> */}

    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
    <h1 className="text-2xl">New Product</h1>
    <ProductList/>
    </div>
    </>
  )
}

export default HomePage