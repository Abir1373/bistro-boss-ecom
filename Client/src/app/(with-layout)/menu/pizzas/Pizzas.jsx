"use client"
import useMenu from '@/app/pages/utils/loadMenu';
import React from 'react';
import DesignOffer from '../DesignOffer';

const Pizzas = () => {
    const [menu] = useMenu();
    const pizzas = menu.filter(item => item.category === "pizza")
    return (
        <div>
            <div className='grid grid-cols-2 gap-4'>
                {
                    pizzas.map(pizza => <DesignOffer key={pizza._id} menu={pizza}></DesignOffer>)
                }
            </div>
            <div className='flex justify-center items-center mx-auto w-full m-5'>
                <button className="btn btn-xs btn-md">ORDER YOUR FAVOURITE FOOD</button>
            </div>

        </div>
    );
};

export default Pizzas;