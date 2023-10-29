"use client";
import Image from 'next/image';
import React from 'react';

const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item;
    return (
        <div>
            <div className='flex m-2'>
                <Image style={{ borderRadius: '0px 200px 200px 200px' }} loader={() => image} src={image} width={118} height={104} alt="img" />
                <div>
                    <h3 className='uppercase'> {name} </h3>
                    <p> {recipe} </p>
                </div>
                <p className='text-orange-400'>${price} </p>
            </div>
        </div>
    );
};

export default MenuItem;