"use client";


// shadcn
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// shadcn
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
    <div className="w-full flex justify-center">
      <Carousel className="w-full max-w-lg max-sm:w-full">
        <CarouselContent>
          {images.map(( img , index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image
                    src={img.url}
                    alt={`Image ${index + 1}`}
                    fill
                    sizes="30vw"
                    className="object-cover rounded-md"
                  />
                </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 &&
        <>
        <CarouselPrevious />
        <CarouselNext />
        </>
        }

      </Carousel>
    </div>
  )
}

export default ProductImages