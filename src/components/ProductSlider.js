import { products } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";
import { Navigation, Pagination } from "swiper/modules";
import { HiPlus } from "react-icons/hi";

const ProductSlider = () => {
    const { pages } = products;

    // VentureMond: Add to Cart Function
    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('venturemond_furniture_cart')) || [];
        cart.push(product);
        localStorage.setItem('venturemond_furniture_cart', JSON.stringify(cart));
        
        // Show Feedback
        alert(`${product.name} added to VentureMond Cart!`);
        
        // Custom Event to update Header Badge (optional but good)
        window.dispatchEvent(new Event("storage"));
    };

    const pageSlider = pages.map((page, index) => {
        return (
            <SwiperSlide key={index}>
                <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg: gap-5 lg:gap-10'>
                    {page.productList.map((product, pIndex) => (
                        <div key={pIndex} className='max-w-[290px] max-h-[400px] w-full text-left'>
                            <div className='border hover:border-accent w-full max-w-[285px] h-[292px] flex items-center justify-center relative transition rounded-lg hover:shadow-md hover:cursor-pointer'>
                                <img src={product.image.type} alt={product.name} />
                                
                                {/* VentureMond: Functional Add Button */}
                                <div
                                    onClick={() => addToCart(product)}
                                    className='absolute right-3 bottom-3 border-2 p-0.5 rounded-full bg-gray-300 hover:bg-accent transition text-black'
                                >
                                    <HiPlus className='text-xl' />
                                </div>
                            </div>
                            <div className='px-1 py-3'>
                                <h3 className='font-semibold text-base lg:text-xl'>{product.name}</h3>
                                <div className='flex gap-x-5 text-sm'>
                                    <p>$ {product.price}</p>
                                    <p className='opacity-60 line-through'>$ {product.oldPrice}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SwiperSlide>
        );
    });

    return (
        <Swiper
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='productSlider relative min-h-[1330px]'
        >
            {pageSlider}
        </Swiper>
    );
};

export default ProductSlider;