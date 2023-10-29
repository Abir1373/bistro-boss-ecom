import React from 'react';
import './Featured.css'
import img from '../../../assets/home/featured.jpg'
import Image from 'next/image';
import SectionTitle from '@/app/components/section-title/SectionTitle';

const Featured = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return (

        <div className='featured'>
            <div>
                <div className='text-white pb-5'><SectionTitle heading="from our menu" subHeading="---check it out---" ></SectionTitle></div>
                <div className='grid grid-cols-2'>
                    <div className='mx-auto'>
                        <Image src={img} alt="img" width={600} height={400}></Image>
                    </div>
                    <div className='mx-auto text-center text-white'>
                        <h2 className='mt-5'>
                            {monthNames[currentMonth]} {currentDay}, {currentYear}
                        </h2>
                        <h2 className='mt-5 uppercase'>Where can i get some</h2>
                        <p className='mt-5 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse voluptas ipsa iste necessitatibus aliquam, quisquam praesentium pariatur soluta dolore, omnis, placeat cumque hic laudantium maxime. Autem iure aspernatur eligendi architecto pariatur aperiam maxime, sed saepe exercitationem. Delectus ipsam ullam numquam animi laborum impedit. Doloremque cupiditate corporis dignissimos ea molestias?</p>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Read More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;