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
import { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/lib/services/productServices";
import { getAllProductImages } from "@/lib/services/productImagesServices";

interface ProductImagesProps {
  pId: number;
}
const ProductImages: FC<ProductImagesProps> = ({pId}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const {data:images, error, isLoading} = useQuery({
    queryKey:["productImages"],
    queryFn: () => getAllProductImages(pId),
  })
  if(isLoading){
    return "Loading ..."
  }
  console.log(images)
  return (
    <div className="w-full flex justify-center">
      <Carousel className="w-full max-sm:w-full">
        <CarouselContent>
          {images?.map((img) => (
            <CarouselItem key={img.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="relative flex aspect-square items-center justify-center">
                    {/* Ouvre le Drawer au clic */}
                    <Drawer>
                      <DrawerTrigger onClick={() => setSelectedImage(img.imageUrl)}>
                        <Image
                          src={`http://localhost:8080/files/images/${img.imageUrl}`}
                          alt={`http://localhost:8080/files/images/${img.imageUrl}`}
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
                                  src={`http://localhost:8080/files/images/${selectedImage}`}
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

        {images && images.length > 1 && (
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
