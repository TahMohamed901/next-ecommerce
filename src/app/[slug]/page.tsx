import Add from '@/components/Add'
import ProductImages from '@/components/ProductImages'
import React from 'react'

// Single Product
const ProductDetails = () => {
  return (
    <div 
    // className='pt-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col md:flex-row gap-8'
    className='pt-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col md:flex-row gap-8'
    >
    {/* IMG */}
        <div 
        // className="sm:w-full md:w-2/5 lg:w-1/2 xl:w-1/2 lg:sticky top-20 h-max"
        className='sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 relative lg:sticky  h-max'
        >
            <ProductImages  />
        </div>

    {/* Text */}
        <div 
        // className="sm:w-full md:w-3/5 lg:w-1/2 xl:w-1/2 flex flex-col gap-6"
        className='sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col gap-6'
        >
          <h1 className="text-4xl font-medium">Product Name</h1>
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat eveniet corrupti voluptatibus consequatur explicabo unde praesentium, tenetur libero, earum vitae magni ducimus molestias blanditiis quam nostrum quisquam reiciendis. Cupiditate?</p>
          {/* Separator */} <div className='h-[2px] bg-gray-100' />
          <div className="flex items-center gap-4">
              <h3 className="text-xl text-gray-500 line-through">
                $200
              </h3>
              <h2 className="font-medium text-2xl">
                $150
              </h2>
          </div>
    {/* Separator */} <div className='h-[2px] bg-gray-100'/>
          <Add />
        </div>
    </div>
    
  )
}

export default ProductDetails