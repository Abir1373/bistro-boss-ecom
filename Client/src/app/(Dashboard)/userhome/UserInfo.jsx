import React from 'react';



const UserInfo = () => {
    const style = {
        'height': '469px',
        'width': '623px',
        'background': '#FFEDD5',
        'borderRight': '3px solid #D1A054'
    }
    const userphoto = {
        'width' : '198px',
        'height': '198px'
}
return (
    <div className='flex justify-center items-center mt-5 mb-5 flex flex-col' style={style}>
        <div style={userphoto} className='border border-2 border-red-400 rounded-full mb-9 bg-white'></div>
        <h2 className='text-2xl font-bold'>Dewan Abir Mahmud </h2>
    </div>
);
};

export default UserInfo;