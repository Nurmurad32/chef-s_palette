import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "./BannerSwipper.css"

import bg1 from "../../../assets/bg-1.jpg"
import bg2 from "../../../assets/bg-2.jpg"
import bg3 from "../../../assets/bg-3.jpg"

const BannerSwipper = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            // className="mySwiper"
            >
                <SwiperSlide className='swiper-img-text'>
                    <img src={bg1} className="img-fluid" alt="..." />
                    <div>
                        <p style={{color:"#e6151c"}}>Asian</p>
                        <h3>Beef Stroganoff</h3>
                        <small className='my-3 d-block'>Indulge in Beef Stroganoff—tender beef, sautéed onions, and mushrooms in a creamy Dijon sour cream sauce. Served over egg noodles, it's a comforting delight.</small>
                        <p className='text-secondary'>~ Nathan Robinson ~</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-img-text'>
                    <img src={bg2} className="img-fluid" alt="..." />
                    <div>
                        <p style={{color:"#e6151c"}}>Grilled</p>
                        <h3>Honey Mustard Glazed Ribs</h3>
                        <small className='my-3 d-block'>Indulge in the savory delight of Honey Mustard Glazed Ribs. Tender pork ribs, baked to perfection with a sweet and tangy honey mustard glaze. A grilled sensation that will leave your taste buds craving for more.</small>
                        <p className='text-secondary'>~ Robert Turner ~</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-img-text'>
                    <img src={bg3} className="img-fluid" alt="..." />
                    <div>
                        <p style={{color:"#e6151c"}}>Italian</p>
                        <h3>Chicken Alfredo Pasta</h3>
                        <small className='my-3 d-block'>Indulge in the rich symphony of creamy Alfredo pasta, where tender chicken meets the perfect blend of garlic, butter, and Parmesan. A delightful Italian classic crafted to perfection.</small>
                        <p className='text-secondary'>~ Megan Harris ~</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default BannerSwipper;