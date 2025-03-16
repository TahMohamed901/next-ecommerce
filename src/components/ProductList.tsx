import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Product from './Product'

const ProductList = () => {
  return (
    <div className='pb-5 mt-8 max-sm:m-5 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      
      <Product img="/products/accessories/p2.jpg" />
      <Product img="/products/accessories/p5.jpg" />
      <Product img="/products/accessories/p3.jpg" />
      <Product img="/products/accessories/p4.jpg" />
    </div>
  )
}

export default ProductList