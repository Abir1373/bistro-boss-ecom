"use client";
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import img1 from '../../../assets/home/img1.jpg'
import img2 from '../../../assets/home/img2.jpg'
import img3 from '../../../assets/home/img3.png'
import img4 from '../../../assets/home/img4.jpg'
import img5 from '../../../assets/home/img5.png'
import img6 from '../../../assets/home/img6.png'
const contentStyle = {
    margin: 0,
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Banner = () => {
    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
            <div>
                <Image src={img1} alt="img1"></Image>
            </div>
            <div>
                <Image src={img2} alt="img2"></Image>
            </div>
            <div>
                <Image src={img3} alt="img3"></Image>
            </div>
            <div>
                <Image src={img4} alt="img4"></Image>
            </div>
            <div>
                <Image src={img5} alt="img5"></Image>
            </div>
            <div>
                <Image src={img6} alt="img6"></Image>
            </div>
        </Carousel>
    );
};
export default Banner;