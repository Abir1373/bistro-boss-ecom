'use client'
import { deleteCart } from '@/app/pages/utils/deleteCart';
import { useAuth } from '@/app/providers/AuthProvider';
import Image from 'next/image';
import React from 'react';
import gif from '../../assets/others/cupcake.gif'

const Success = () => {
    const { user } = useAuth()
    if (!user) return <span className="loading loading-spinner text-secondary"></span>
    if (user) {
        let payItemsString = localStorage.getItem('pay');
        let payItemsArray = payItemsString ? JSON.parse(payItemsString) : [];
        // console.log(payItemsArray)
        if (payItemsArray.length > 0) {
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(payItemsArray)
            })
                .then(response => {
                    if (response.ok) {
                        // Handle success, if needed
                        console.log('Items successfully sent to server');
                        localStorage.removeItem('pay');
                        deleteCart(user.email)
                    } else {
                        // Handle errors, if any
                        console.error('Failed to send items to server');
                    }
                })
                .catch(error => {
                    console.error('Error during fetch:', error);
                });
        }
        //TODO : have to create a new database document name History
        //TODO : have to create a new database document name Order
        return (
            <div className='flex flex-col'>
                <span className='text-4xl font-bold text-center uppercase text-rose-400'>
                    thanks for using our bisto-boss service !!!
                </span>
                <Image
                    src={gif}
                    alt="Example Image"
                    width={850}
                    height={600}
                    unoptimized={true}
                ></Image>
                <span className='text-4xl font-bold text-center uppercase text-orange-400'>
                    payment successful !
                </span>
            </div>
        );
    }

};

export default Success;
