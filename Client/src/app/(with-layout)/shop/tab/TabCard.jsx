import { useAuth } from '@/app/providers/AuthProvider';
import Image from 'next/image';
import React from 'react';

const TabCard = ({ data }) => {
  const { user } = useAuth()
  const { name, _id, recipe, image, price, category } = data;
  const handleAddToCart = item => {
    console.log(item, user)
    if (user) {
      const cartItem = { menuItemId: _id, name, image, price, email: user.email, category: category }
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(cartItem)
      })
    }
  }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={image} alt='img' width={300} height={250}></Image>
      </figure>
      <div className="card-body">
        <div className='flex flex-row'>
          <h2 className="card-title text-xl font-bold text-warning">{name}</h2>
          <div className='flex-grow'></div>
          <h2 className='font-bold text-xl text-rose-400'> $ <span className='text-xl font-bold text-orange-600'> {price} </span> </h2>
        </div>
        <p className='text-xl'>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={() => handleAddToCart(data)} className="btn btn-primary text-xl">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default TabCard;