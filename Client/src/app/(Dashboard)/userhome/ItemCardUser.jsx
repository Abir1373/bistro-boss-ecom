import React from 'react';

const ItemCardUser = ({ item }) => {
    const { itemName, itemDigit } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">

            <div className='flex flex-row'>
                <div className="card-body items-center text-center">TODO</div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{itemDigit}</h2>
                    <h2 className="card-title">{itemName}</h2>
                </div>
            </div>
        </div>
    );
};

export default ItemCardUser;