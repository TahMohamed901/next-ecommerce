import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative  w-full overflow-hidden max-sm:h-[15vh] h-[20vh]">
        <Image
          src="/bg-2.jpg"
          alt="Banner"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  )
}

export default Banner