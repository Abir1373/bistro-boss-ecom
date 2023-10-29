"use client"
import React from 'react';

import { BsTelephoneOutbound } from "react-icons/bs";

import { MdOutlineEditLocationAlt } from "react-icons/md";

import { FaRegClock } from "react-icons/fa6";

import { LuTable } from "react-icons/lu";
import SectionTitle from '@/app/components/section-title/SectionTitle';
import { useRouter } from 'next/navigation';



const Reservation = () => {

    const router = useRouter()    

    const style = {
        'width': 'w-full',
        'height': '300px'
    }

    const phoneIconStyle = {
        'width': '32px',
        'height': '32px'
    }

    const BookingButtonStyle = {
        'width': '250px',
        'height': '65px',
        'backgroundColor': '#D1A054'
    }



    const handleReservation = event => {
        event.preventDefault()
        // const form = event.target
        // const date = form.date.value
        // const time = form.time.value
        // const guest = form.guest.value
        // const name = form.name.value
        // const phone = form.phone.value
        // const email = form.email.value
        // console.log(date, time, guest, name, phone, email)
        // const reservationInfo = {
        //     date: date,
        //     time: time,
        //     guest: guest,
        //     name: name,
        //     phone: phone,
        //     email: email
        // }
        // fetch('http://localhost:5000/reservations', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(reservationInfo)
        // })
        router.push('/payment')

    }

    return (
        <>
            <SectionTitle heading='book a table' subHeading='---Reservation---'></SectionTitle>
            <div className='h-3/4'>
                <form onSubmit={handleReservation}>
                    <div className='grid grid-cols-3 gap-6 text-2xl'>
                        {/* item 1 date*/}
                        <div className='flex flex-col m-9 '>
                            <label className='mb-5'> Date* </label>
                            <input className='h-14 p-5 border-0' type="date" name="date" id="date" />
                        </div>
                        {/* item 2 time*/}
                        <div className='flex flex-col m-9 '>
                            <label className='mb-5'> Time* </label>
                            <input className='h-14 p-5 border-0' type="time" name="time" id="time" />
                        </div>
                        {/* item 3 Guest */}
                        <div className='flex flex-col m-9 '>
                            <label className='mb-5'> Guest* </label>
                            <input className='h-14 p-5 border-0' type="number" name="guest" id="guest" placeholder='1 Person' />
                        </div>
                        {/* item 4 Name*/}
                        <div className='flex flex-col m-9 '>
                            <label className='mb-5'> Name* </label>
                            <input className='h-14 p-5 border-0' type="text" name="name" id="name" placeholder='Your Name' />
                        </div>
                        {/* item 5 Phone */}
                        <div className='flex flex-col m-9 '>
                            <label className='mb-5'> Phone* </label>
                            <input className='h-14 p-5 border-0' type="text" name="phone" id="phone" placeholder='Phone Number' />
                        </div>
                        {/* item 6 Email */}
                        <div className='flex flex-col m-9 '>
                            <label className='mb-5'> Email* </label>
                            <input className='h-14 p-5 border-0' type="email" name="email" id="email" placeholder='Email' />
                        </div>

                    </div>

                    {/* book table button */}

                    <div className='flex flex-row justify-center m-5 border border-2 border-black-400 mx-auto text-white' style={BookingButtonStyle}>
                        <input type="submit" value="Book A Table" className='text-2xl' />
                        <div><LuTable className='h-10 w-10 text-sm ml-4 pt-4'></LuTable></div>
                    </div>

                </form>
                {/* footer for reservation */}

                <div className='flex flex-row  h-flex uppercase'>


                    <div className=' h-flex w-full flex flex-col'>

                        <div className='h-20 items-center justify-center flex border border-2 border-red-200' style={{ backgroundColor: '#D1A054' }} > <BsTelephoneOutbound className='h-16 w-10 text-xl text-white'></BsTelephoneOutbound> </div>

                        <div className='bg-slate-100 space-y-3 flex flex-col items-center justify-center' style={style}>
                            <h2 className='text-2xl mb-5 font-bold'>Phone</h2>
                            <h4 className='text-xl'>+38 (012) 34 56 789</h4>
                        </div>

                    </div>
                    <div className=' h-flex w-full flex flex-col'>

                        <div className='h-20 items-center justify-center flex border border-2 border-red-200' style={{ backgroundColor: '#D1A054' }}> <MdOutlineEditLocationAlt className='h-16 w-10 text-xl text-white'></MdOutlineEditLocationAlt> </div>
                        <div className='bg-slate-100 space-y-3 flex flex-col items-center justify-center' style={style}>
                            <h2 className='text-2xl mb-5 font-bold'>Address</h2>
                            <h4 className='text-xl'>+38 (012) 34 56 789</h4>
                        </div>

                    </div>
                    <div className=' h-flex w-full flex flex-col'>

                        <div className='h-20 items-center justify-center flex border border-2 border-red-200' style={{ backgroundColor: '#D1A054' }}> <FaRegClock className='h-16 w-10 text-xl text-white'></FaRegClock> </div>
                        <div className='bg-slate-100 space-y-3 flex flex-col items-center justify-center' style={style}>
                            <h2 className='text-2xl mb-5 font-bold'>working hours</h2>
                            <h4 className='text-xl'>Mon - Fri: 08:00 - 22:00</h4>
                            <h4 className='text-xl'>Sat - Sun: 10:00 - 23:00</h4>
                        </div>

                    </div>


                </div>

            </div >
        </>
    );
};

export default Reservation;