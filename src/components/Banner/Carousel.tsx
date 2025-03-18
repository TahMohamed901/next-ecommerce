"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  autoSlide = true,
  autoSlideInterval = 8000,
  slides,
}:
{
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[][];
}) 
{
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative w-full h-[600px]">
      {/* Images Container */}
      <div className="flex transition-transform ease-out duration-500 w-full h-full" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((pair, i) => (
          <div key={i} className="flex-shrink-0 w-full h-full flex max-sm:flex-col ">
            <div className="relative max-sm:w-full max-sm:h-1/3 md:w-1/2 xl:w-3/5 h-full ">
                <Image src={pair[1]} alt="" fill className="object-cover" />
            </div>
            <div className="relative max-sm:w-full max-sm:h-2/3 md:w-1/2 xl:w-2/5 h-full">
                <Image src={pair[0]} alt="" fill className="object-cover " />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-2 rounded-full shadow bg-white/10 text-gray-900/30">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="p-2 rounded-full shadow  bg-white/10 text-gray-900/30">
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Dots Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <div key={i} className={`transition-all w-3 h-3 rounded-full ${curr === i ? "bg-white p-2" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}
