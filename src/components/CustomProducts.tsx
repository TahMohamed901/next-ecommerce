"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product1 from './Product1';
import CarouselItem from './CarouselItem';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
    
};
const CustomProducts = () => {
  return (
    <div className='pb-4'> 
    
        <Carousel responsive={responsive} 
        infinite={true}
        showDots
        removeArrowOnDeviceType={['tablet','desktop']}
        dotListClass="md:hidden"
        >
            <Product1 img="/products/accessories/p5.jpg" />
            <Product1 img="/products/accessories/p3.jpg" />
            <Product1 img="/products/accessories/p4.jpg" />
            <Product1 img="/products/accessories/sac-tabac-1.webp" />
            <Product1 img="/products/accessories/perles-1.webp" />
            <Product1 img="/products/accessories/rocaille-1.jpg" />
            <Product1 img="/products/accessories/tasbih-4.webp" /> 
        </Carousel>
    </div>
  )
}

export default CustomProducts

