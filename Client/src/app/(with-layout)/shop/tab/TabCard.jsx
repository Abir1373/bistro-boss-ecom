import { useAuth } from '@/app/providers/AuthProvider';
import Image from 'next/image';
import React from 'react';

const TabCard = ({data}) => {
    const {user} = useAuth()
    const {name,_id,recipe,image,price} = data ;
    const handleAddToCart = item => {
      console.log(item,user)
      if(user){
        const cartItem = {menuItemId: _id,name,image,price,email: user.email}
        fetch('http://localhost:5000/carts',{
          method: 'POST',
          headers: {
            'content-type' : 'application/json' , 
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
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={()=>handleAddToCart(data)} className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div> 
    );
};

export default TabCard;