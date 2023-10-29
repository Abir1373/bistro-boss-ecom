import React from 'react';
import ItemCardAdmin from './ItemCardAdmin';

const AdminHomeLayout = ({ children }) => {
    const items = [{
        itemName:'Revenue' , 
        itemDigit: 2000, 
    },
    {
        itemName: 'Products' , 
        itemDigit: 2000, 
    }
]
    return (
        <div className='flex flex-col items-center m-5'>
            
            <div className='flex flex-row m-5 gap-6'>
                {/* cart item 1 */}
                {
                    items.map((item,index)=><ItemCardAdmin key={index} item={item}></ItemCardAdmin>)
                }
                

            </div>
            {children}
        </div>
    );
};

export default AdminHomeLayout;