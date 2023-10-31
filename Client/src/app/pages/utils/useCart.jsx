"use client"
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/providers/AuthProvider';

const useCart =  () => {
    const { user} = useAuth();
    const [cartitems, setCartItems] = useState([]);

    if (!user) {
        return <div>loading</div>;
    }
    // console.log(user.email) ; 
    const url = `http://localhost:5000/carts?email=${user.email}`;
    fetch(url,{
        method: 'GET',
        headers: {authorization: `Bearer ${localStorage.getItem('token')}`},
        cache:"force-cache"
    })
    .then(res=>res.json())
    .then(data=>{
        setCartItems(data)
        // console.log(data) ; 
    })

    if(cartitems)
    {
        return cartitems ; 
    }

    // console.log(typeof(cartItems))
    


}

export default useCart;
