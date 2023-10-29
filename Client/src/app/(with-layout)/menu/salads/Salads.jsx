"use client"
import useMenu from '@/app/pages/utils/loadMenu';
import React from 'react';
import DesignOffer from '../DesignOffer';

const Salads = () => {
    const [menu] = useMenu();
    const salads = menu.filter(item => item.category === "salad")
    return (
        <div>
            <div className='grid grid-cols-2 gap-4'>
                {
                    salads.map(salad => <DesignOffer key={salad._id} menu={salad}></DesignOffer>)
                }
            </div>
            <div className='flex justify-center items-center mx-auto w-full'>
                <button className="btn btn-xs btn-md">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default Salads;