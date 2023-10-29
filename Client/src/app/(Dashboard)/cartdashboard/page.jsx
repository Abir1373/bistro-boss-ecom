"use client"
import React from 'react';
import useCart from '@/app/pages/utils/useCart';

import { FaUserEdit } from "react-icons/fa";


import { FaTrash } from "react-icons/fa6";


//TODO : 1. insert SingleCartItem to useState 2. two action button like delete and edit 3. editing other components

const CartDashboard = () => {

    const savedCartItems = useCart();

    if (savedCartItems.length === 0) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    const SingleCartItem = []

    let totalPrice = 0  

    for (let i = 0; i < savedCartItems.length; i++) {
        let orderedItem =
        {
            itemName: savedCartItems[i].name,
            menuItemID: savedCartItems[i].menuItemId,
            itemImage: savedCartItems[i].image,
            itemPrice: savedCartItems[i].price,
            itemId: savedCartItems[i]._id,
            quantity: 1
        }

        totalPrice += orderedItem.itemPrice

        const existingItemIndex = SingleCartItem.findIndex(item => item.itemName === orderedItem.itemName);
        if (existingItemIndex !== -1) {
            SingleCartItem[existingItemIndex].quantity += 1;

        } else {
            
            SingleCartItem.push(orderedItem);
        }
    }

    // console.log(totalPrice)

    const handlePay = () => {
        fetch('http://localhost:5000/create-checkout-session', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(SingleCartItem)
        })
            .then(res => res.json())
            .then(({ url }) => {
                window.location = url
            })
    }

    return (
        <div>

            <div className='flex justify-end'>
                <button onClick={handlePay} className="btn text-xl text-white btn-accent w-32">Pay</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table text-center items-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='uppercase text-2xl'>Quantity</th>
                            <th className='uppercase text-2xl'>item image</th>
                            <th className='uppercase text-2xl'>item name</th>
                            <th className='uppercase text-2xl'>price</th>
                            <th className='uppercase text-2xl'>action</th>
                            <th className='uppercase text-2xl'>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            SingleCartItem.map((food, index) => (
                                <tr key={index}>
                                    <td className='uppercase text-xl'>{food.quantity}</td>
                                    <td className='uppercase text-xl'>img</td>
                                    <td className='uppercase text-xl'>{food.itemName}</td>
                                    <td className='uppercase text-xl'>$ {food.itemPrice}</td>

                                    <td className='uppercase text-xl'> <FaUserEdit></FaUserEdit>  </td>
                                    <td className='uppercase text-xl'> <FaTrash></FaTrash></td>

                                </tr>
                            ))
                        }


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default CartDashboard;











// import React from 'react';

// const Cartdashboard = () => {
//     return (
//         <div>
//             CartDashBoard
//         </div>
//     );
// };

// export default Cartdashboard;
