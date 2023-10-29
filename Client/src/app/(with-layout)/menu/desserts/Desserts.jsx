"use client"
import useMenu from '@/app/pages/utils/loadMenu';
import React from 'react';
import DesignOffer from '../DesignOffer';
import Link from 'next/link';

const Desserts = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert")
    return (
        <div>
            <div className='grid grid-cols-2 gap-4'>
                {
                    desserts.map(dessert => <DesignOffer key={dessert._id} menu={dessert}></DesignOffer>)
                }
            </div>
            <div className='flex justify-center items-center mx-auto w-full'>
                <Link href={"/shop"}><button className="btn btn-xs btn-md">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default Desserts;