
import Addresses from "@/components/Checkout/Addresses";
import { BreadCrumb } from "@/components/shared/BreadCrumb";

const page = () => {
  return (
    <>
    <div className="py-5 px-2">
      <BreadCrumb current="addresses" />
    </div>
    <div className="flex justify-center items-center">
      <Addresses/>
    </div>
    </>
  )
}

export default page