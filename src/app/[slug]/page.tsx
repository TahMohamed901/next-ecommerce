import Add from '@/components/Add'
import ProductImages from '@/components/ProductImages'
import React from 'react'

// Single Product
const page = () => {
  return (
    <div className='mt-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
        {/* IMG */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
            <ProductImages  />
        </div>
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
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

export default page