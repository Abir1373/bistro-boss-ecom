import Image from 'next/image';
import React from 'react';

const DesignOffer = ({ menu }) => {
    const { name, price, recipe, image } = menu
    const style = {
        borderRadius: '0px 200px 200px 200px',
    }
    return (
        <div className='flex p-5 mt-5'>
            <div className='mt-3'>
                <Image src={image} width={118} height={104} alt="img" style={style}></Image>
            </div>
            <div className='pl-5'>
                <div className='flex justify-between'>
                    <h2 className='text-2xl'> {name}---------- </h2>
                    <p className='text-2xl text-orange-400'>$<span>{price}</span></p>
                </div>
                <div>
                    {recipe}
                </div>
            </div>
        </div>
    );
};

export default DesignOffer;