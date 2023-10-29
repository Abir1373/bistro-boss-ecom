import React from 'react';
import { BsFillCalendarWeekFill, BsFillCreditCard2FrontFill, BsStarFill } from 'react-icons/bs';
import { FaCartArrowDown } from 'react-icons/fa6';

const Activities = () => {
    const style = {
        'height': '469px',
        'width': '623px',
        'background': '#FEF9C3'
    }
    return (
        <div className='items-center  justify-center space-y-4 flex flex-col mt-5 mb-5 items-center  ' style={style}>
            <h2 className='mb-5 text-4xl font-bold '>Your Activities</h2>

            <div className='flex flex-row font-bold '>
                <FaCartArrowDown className='text-2xl text-sky-400 mt-1 mr-3'></FaCartArrowDown>
                <h4 className='text-left text-2xl text-sky-400'>Orders : 2 </h4>
            </div>

            <div className='flex flex-row font-bold '>
                <BsStarFill className='text-2xl text-success mt-1 mr-3'></BsStarFill>
                <h4 className='text-left text-2xl text-success'>Reviews : 2 </h4>
            </div>


            <div className='flex flex-row'>
                <BsFillCalendarWeekFill className='text-2xl text-warning mt-1 mr-3'></BsFillCalendarWeekFill>
                <h4 className='text-left text-2xl text-warning'>Bookings : 2  </h4>
            </div>

            <div className='flex flex-row font-bold'>
                <BsFillCreditCard2FrontFill className='text-2xl text-red-500 mt-1 mr-3'></BsFillCreditCard2FrontFill>
                <h4 className='text-left text-2xl text-red-500'>Payment : 2 </h4>
            </div>

        </div>
    );
};

export default Activities;