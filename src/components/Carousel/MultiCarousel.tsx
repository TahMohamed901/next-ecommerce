"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from './CarouselItem';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getAllProducts, getAllProductsByCategoryName } from '@/lib/services/productServices';
import { getCategoryByName } from '@/lib/services/categoryServices';
import { useRouter } from 'next/navigation';

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
};
const MultiCarousel: React.FC<{ category: string }> = ({category}) => {
    const router = useRouter()
    const {data, error, isLoading} = useQuery({
        queryKey:[category],
        queryFn: () => getAllProductsByCategoryName(category,0, 10),
    })
    if(isLoading){
        return "Loading ..."
    }
    if(!data){
        return null
    }
    return (
    <div  className='pb-4'> 
        <Carousel 
        responsive={responsive} 
        infinite={true}
        showDots
        removeArrowOnDeviceType={['tablet', 'desktop']}
        dotListClass="md:hidden"
        >
        {data?.map((product, index) => (
            <div key={index} onClick={() => router.push(`/${product.id}`)}>
                <CarouselItem
                key={index}
                id={product.id}
                img={product.mainImage}
                title={product.name}
                description={product.description}
                price={Math.floor(Math.random() * 500) + 100} // Génération aléatoire d'un prix
                />
            </div>
        ))}
        </Carousel>
    </div>
    )
}

export default MultiCarousel