import React from 'react';
import ItemCardUser from './ItemCardUser';


const UserHomeLayout = ({ children }) => {
    const items = [
        {
            itemName: 'Revenue',
            itemDigit: 2000,
        },
        {
            itemName: 'Products',
            itemDigit: 2000,
        }
    ]
    return (
        <div className='flex flex-col items-center m-5'>

            <div className='flex flex-row m-5 gap-6'>
                {/* cart item 1 */}
                {
                    items.map((item, index) => <ItemCardUser key={index} item={item}></ItemCardUser>)
                }


            </div>
            {children}
        </div>
    );
};

export default UserHomeLayout;