"use client";

// Import shadcn UI components
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
// import Zoom from "react-medium-image-zoom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";
import { useState } from "react";

const images = [
  { id: 1, url: "/products/photography/train-1.webp" },
  { id: 2, url: "/products/photography/train-2.webp" },
  { id: 3, url: "/products/photography/train-3.webp" },
  { id: 4, url: "/products/photography/train-4.webp" },
  { id: 5, url: "/products/photography/img-5.png" },
];

const ProductImages = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full flex justify-center">
      <Carousel className="w-full max-sm:w-full">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="relative flex aspect-square items-center justify-center">
                    {/* Ouvre le Drawer au clic */}
                    <Drawer>
                      <DrawerTrigger onClick={() => setSelectedImage(img.url)}>
                        <Image
                          src={img.url}
                          alt={`Image ${index + 1}`}
                          fill
                          sizes="30vw"
                          className="object-cover rounded-md cursor-pointer"
                        />
                      </DrawerTrigger>
                      <DrawerContent>
                        {selectedImage && (
                          <div className="flex justify-center items-center w-full">
                            <TransformWrapper>
                              <TransformComponent>
                                <Image
                                  src={selectedImage}
                                  alt="Zoomable Image"
                                  width={700}
                                  height={300}
                                  className="object-contain rounded-lg w-[100vw] lg:h-[70vh]"
                                />
                              </TransformComponent>
                            </TransformWrapper>
                          </div>
                        )}
                      </DrawerContent>
                    </Drawer>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {images.length > 1 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default ProductImages;
