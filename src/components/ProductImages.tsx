"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "/products/accessories/p2.jpg",
  },
  {
    id: 2,
    url: "/products/accessories/p3.jpg",
  },
  {
    id: 3,
    url: "/products/accessories/p4.jpg",
  },
  {
    id: 4,
    url: "/products/accessories/p5.jpg",
  },
];


const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="max-sm:h-[80vw] h-[30vw] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-4">
        {images.map((img:any, i:number) => (
          <div
            className="w-1/4 h-28 relative gap-4 mt-8 cursor-pointer"
            key={i}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages