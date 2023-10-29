"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '@/app/components/section-title/SectionTitle';

const SwiperComponent = () => {
    return (
        <section>
            <SectionTitle subHeading={"From 11.00 am to 10.00 pm"} heading={"Order Online"}>
            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={slide1} alt="slide1"></Image>
                    <h3 className='text-xl font bold text-center uppercase text-black mt-2'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide2} alt="slide2"></Image>
                    <h3 className='text-xl font bold text-center uppercase text-black mt-2'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide3} alt="slide3"></Image>
                    <h3 className='text-xl font bold text-center uppercase text-black mt-2'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide4} alt="slide4"></Image>
                    <h3 className='text-xl font bold text-center uppercase text-black mt-2'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide5} alt="slide5"></Image>
                    <h3 className='text-xl font bold text-center uppercase text-black mt-2'>Fruit Salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default SwiperComponent;