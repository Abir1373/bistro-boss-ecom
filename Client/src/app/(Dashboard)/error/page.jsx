import React from 'react';
import gif from '../../assets/others/404.gif'
import Image from 'next/image';
const Error = () => {
    return (
        <div className='flex flex-col'>
            <span className='text-4xl font-bold text-center uppercase text-rose-400'>
                please try again ! something went wrong  !!!
            </span>
            <Image
                src={gif}
                alt="Example Image"
                width={850}
                height={600}
                unoptimized={true}
            ></Image>
            <span className='text-4xl font-bold text-center uppercase text-orange-400'>
                unsuccessful attempt!
            </span>
        </div>
    );
};

export default Error;