"use client"
import React, { useEffect, useState } from 'react';


const loadAllUser = (email) => {
    let [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/users`,{
            cache:'force-cache'
        })
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return [data]

};

export default loadAllUser;




