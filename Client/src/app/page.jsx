import React from 'react';
import Banner from './(with-layout)/home/banner/Banner';
import SwiperComponent from './(with-layout)/home/swiper-component/SwiperComponent';
import PopularMenu from './(with-layout)/home/popular-menu/PopularMenu';
import Featured from './(with-layout)/home/featured/Featured';
import Navbar from './pages/shared/navbar/Navbar';
import Footer from './pages/shared/footer/Footer';

const page = () => {
  return (
      <div className='mx-auto container max-w-screen-xl'>
        <Navbar></Navbar>
        <Banner></Banner>
        <SwiperComponent></SwiperComponent>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Footer></Footer>
      </div>
  );
};

export default page;