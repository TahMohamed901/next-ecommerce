"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CarouselItem from './CarouselItem';
import { useEffect } from 'react';
interface Product {
    name: string;
    description: string;
    images: string[];
}

interface Category {
    path: string;
    data: Product[];

}

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
};
const MultiCarousel: React.FC<{ category: Category }> = ({ category }) => {

    
    return (
    <div  className='pb-4'> 
        <Carousel 
        responsive={responsive} 
        infinite={true}
        showDots
        removeArrowOnDeviceType={['tablet', 'desktop','mobile']}
        dotListClass="md:hidden"
        >
        {category.data.map((product, index) => (
            <CarouselItem
            key={index}
            img={category.path+product.images[0]}
            title={product.name}
            description={product.description}
            price={Math.floor(Math.random() * 500) + 100} // Génération aléatoire d'un prix
            />
        ))}
        </Carousel>
    </div>
    )
}

export default MultiCarousel