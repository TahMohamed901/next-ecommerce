import Banner from "@/components/Banner/Banner"
import Link from "next/link"
import { photographies, accessories, bestsellers} from "@/lib/products"
import MultiCarousel from "@/components/Carousel/MultiCarousel"
import Image from "next/image"
import CustomButton from "@/components/Button/CustomButton"
const HomePage = () => {
  return (
    <>
    {/* <Slider /> */}
    {/* <Banner /> */}
    <div className="w-full flex-col justify-center  h-auto p-4 bg-black">
      <div className="text-white text-center">
        <h1 className="text-2xl font-medium ">Wold Of Art</h1>
        <p className="text-sm">Journey to the world of art</p>
      </div>
      <div className="lg:flex justify-center">
        <div className="p-2 flex justify-end items-center w-full  lg:w-1/4">
        <Image src="/images/img8.jpg" alt="" width={5000} height={100} className="w-4/5 object-contain md:w-full"/>
        </div>
        <div className="p-2 flex justify-start items-center gap-2 w-full lg:w-1/4">
        <Image src="/images/perles.png" alt="" width={5000} height={100} className="w-4/5 object-contain md:w-full"/>
        </div>
        <div className="p-2 flex justify-end items-center w-full  lg:w-1/4">
        <Image src="/images/daraa.png" alt="" width={5000} height={100} className="w-4/5 object-contain max-sm:hidden md:w-full"/>
        </div>
        <div className="p-2 flex justify-start items-center gap-2 w-full lg:w-1/4">
        <Image src="/images/img10.jpg" alt="" width={5000} height={100} className="w-4/5 object-contain max-sm:hidden md:w-full"/>
        </div>
      </div>
      <div className="pt-4">
        <CustomButton text="Discover our collection" link="/"/>
      </div>
    </div>

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

    <MultiCarousel category={bestsellers} />
    </div>


    {/* Product Catalogue  2 */} 
    <div className=" pt-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-50">

      <div className="flex justify-between items-end max-sm:flex-col max-sm:justify-center max-sm:items-start">
        <div className="">
        <h1 className="text-2xl font-medium">Photographies</h1>
        <p className="text-sm">Discover the bests photographies</p>
        </div>
        <Link href={"/list"}>
          <h6 className="underline max-sm:mt-8">All Photographies</h6>
          <p></p>
        </Link>
        
      </div>

      <MultiCarousel category={photographies} />
    </div>

    {/* Product Catalogue  3 */} 
    <div className="pt-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-50">

      <div className="flex justify-between items-end max-sm:flex-col max-sm:justify-center max-sm:items-start">
        <div className="">
        <h1 className="text-2xl font-medium">Accessories</h1>
        <p className="text-sm">Discover the bests accessories</p>
        </div>
        <Link href={"/list"}>
          <h6 className="underline max-sm:mt-8">All Accessories</h6>
          <p></p>
        </Link>
        
      </div>

      <MultiCarousel category={accessories} />
    </div>
    </>
  )
}

export default HomePage