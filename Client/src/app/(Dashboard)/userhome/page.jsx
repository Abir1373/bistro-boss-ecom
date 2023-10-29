import React from 'react';
import UserInfo from './UserInfo';
import Activities from './Activities';

const UserHome = () => {
    
    return (
        <div className='grid grid-cols-2 items-center'>
            <UserInfo></UserInfo>
            <Activities></Activities>
        </div>
    );
};

export default UserHome;