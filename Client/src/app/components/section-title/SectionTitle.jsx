"use client";
import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center my-8'>
            <p className='text-orange-400 mb-4 text-2xl'> ---{subHeading}--- </p>
            <p className='border-y-4 m-5 p-3 text-4xl uppercase'> {heading} </p>
        </div>
    );
};

export default SectionTitle;