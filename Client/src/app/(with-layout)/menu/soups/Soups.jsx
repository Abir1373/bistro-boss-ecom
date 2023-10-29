"use client"
import useMenu from '@/app/pages/utils/loadMenu';
import React from 'react';
import DesignOffer from '../DesignOffer';

const Soups = () => {
    const [menu] = useMenu()
    const soups = menu.filter(item => item.category === "soup");
    return (
        <div>
            <div className='grid grid-cols-2 gap-4'>
                {
                    soups.map(soup => <DesignOffer key={soup._id} menu={soup}></DesignOffer>)
                }
            </div>
            <div className='flex justify-center items-center mx-auto w-full'>
                <button className="btn btn-xs btn-md">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default Soups;