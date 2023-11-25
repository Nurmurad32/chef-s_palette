import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import Chef from '../../../components/Chef/Chef';
import useDataLoad from '../../../hooks/useDataLoad';

const ChefsSwiper = () => {

    const chefs = useDataLoad("chefs");
    console.log(chefs);

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={40}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                500: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            }}
            modules={[Autoplay, Pagination]}
        // className="mySwiper"
        >
            {
                chefs?.map((chef, idx) =>
                    <SwiperSlide key={idx}>
                        <Chef chef={chef}></Chef>
                    </SwiperSlide>
                )
            }

        </Swiper>
    );
};

export default ChefsSwiper;