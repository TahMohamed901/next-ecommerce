"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product1 from './Product1';
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
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};
const CustomProducts = () => {

  return (
    <div className='mt-8 h-[50vh] w-full'> 
        <Carousel responsive={responsive} 
        >
            <Product1 img="/products/accessories/p3.jpg" />
            <Product1 img="/products/accessories/p4.jpg" />
            <Product1 img="/products/accessories/p5.jpg" />
            <Product1 img="/products/accessories/p4.jpg" />
            <Product1 img="/products/accessories/p5.jpg" />
            <Product1 img="/products/accessories/p4.jpg" />
            <Product1 img="/products/accessories/p5.jpg" />
        </Carousel>
    </div>
  )
}

export default CustomProducts