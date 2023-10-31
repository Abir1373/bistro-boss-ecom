"use client"

import Link from 'next/link';

import { FaHome, FaCalendarWeek, FaWallet, FaCartPlus, } from "react-icons/fa";

import { FaBagShopping } from "react-icons/fa6";

import { MdFeedback, MdMarkEmailRead } from "react-icons/md";

import { BsBookmarksFill } from "react-icons/bs";

import { ImMenu } from "react-icons/im";

import { useAuth } from '../providers/AuthProvider';
import { loadActiveUser } from '../pages/utils/loadActiveUser';
import { useEffect, useState } from 'react';






const DashboardLayout = ({ children }) => {


    const { user } = useAuth();
    const [roleinfo, setRoleInfo] = useState(null);

    useEffect(() => {
        if (user) {
            loadActiveUser(user.email)
                .then(data => setRoleInfo(data))
                .catch(error => console.error('Error fetching role info:', error));
        }
    }, [user]);

    return (

        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                {children}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Open drawer</label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                {
                    
                    roleinfo === "user" && <ul className="menu p-4 w-80 min-h-full  text-base-content  " style={{ backgroundColor: '#D1A054' }}>
                        {/* Sidebar content here */}
                        <li className='mt-4'><Link href="/userhome" className="text-2xl uppercase">  <FaHome></FaHome> <span> user home </span></Link></li>
                        <li className='mt-4'><Link href="/reservation" className="text-2xl uppercase">  <FaCalendarWeek></FaCalendarWeek> <span> reservation </span> </Link></li>
                        <li className='mt-4'><Link href="/paymenthistory" className="text-2xl uppercase">  <FaWallet></FaWallet> <span> payment history </span> </Link></li>
                        <li className='mt-4'><Link href="/cartdashboard" className="text-2xl uppercase">  <FaCartPlus></FaCartPlus> <span> my cart </span></Link></li>
                        <li className='mt-4'><Link href="/addreview" className="text-2xl uppercase">  <MdFeedback></MdFeedback> <span> add review </span></Link></li>
                        <li className='mt-4'><Link href="/mybooking" className="text-2xl uppercase">  <BsBookmarksFill></BsBookmarksFill> <span> my booking </span></Link></li>

                        <li className='mt-4'><Link href="/" className="text-2xl uppercase">  <FaHome></FaHome> <span> home </span></Link></li>
                        <li className='mt-4'><Link href="/menu" className="text-2xl uppercase">  <ImMenu></ImMenu> <span> menu </span></Link></li>
                        <li className='mt-4'><Link href="/shop" className="text-2xl uppercase">  <FaBagShopping></FaBagShopping> <span> shop </span></Link></li>
                        <li className='mt-4'><Link href="/" className="text-2xl uppercase">  <MdMarkEmailRead></MdMarkEmailRead> <span> contact </span></Link></li>
                    </ul>
                }
                {
                    roleinfo === "admin" && <ul className="menu p-4 w-80 min-h-full  text-base-content  " style={{ backgroundColor: '#D1A054' }}>
                        {/* Sidebar content here */}
                        <li className='mt-4'><Link href="/adminhome" className="text-2xl uppercase">  <FaHome></FaHome> <span> admin home </span></Link></li>
                        <li className='mt-4'><Link href="/additems" className="text-2xl uppercase">  <FaCalendarWeek></FaCalendarWeek> <span> add items </span> </Link></li>
                        <li className='mt-4'><Link href="/updateitem" className="text-2xl uppercase">  <FaCalendarWeek></FaCalendarWeek> <span> update items </span> </Link></li>
                        <li className='mt-4'><Link href="/manageitems" className="text-2xl uppercase">  <FaWallet></FaWallet> <span> manage items </span> </Link></li>
                        <li className='mt-4'><Link href="/managebookings" className="text-2xl uppercase">  <FaCartPlus></FaCartPlus> <span> manage bookings </span></Link></li>
                        <li className='mt-4'><Link href="/allusers" className="text-2xl uppercase">  <MdFeedback></MdFeedback> <span> all users </span></Link></li>

                        <li className='mt-4'><Link href="/" className="text-2xl uppercase">  <FaHome></FaHome> <span> home </span></Link></li>
                        <li className='mt-4'><Link href="/menu" className="text-2xl uppercase">  <ImMenu></ImMenu> <span> menu </span></Link></li>
                        <li className='mt-4'><Link href="/shop" className="text-2xl uppercase">  <FaBagShopping></FaBagShopping> <span> shop </span></Link></li>
                        <li className='mt-4'><Link href="/" className="text-2xl uppercase">  <MdMarkEmailRead></MdMarkEmailRead> <span> contact </span></Link></li>
                    </ul>
                }

            </div>
        </div>
    );

};

export default DashboardLayout;