"use client"
import { useAuth } from '@/app/providers/AuthProvider';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const { user, logOut, loading } = useAuth()

    if (loading) {
        <span className="loading loading-spinner loading-lg"></span>
    }

    const handleSignOut = () => {
        logOut()
    }

    const navOptions = <>
        <li className='uppercase'><Link href="/">Home</Link></li>
        <li className='uppercase'><Link href="/">Contact us</Link></li>
        <li className='uppercase'><Link href="/menu">our menu</Link></li>
        <li className='uppercase'><Link href="/shop">our shop</Link></li>
        <li className='uppercase'><Link href="/userhome">dashboard</Link></li>
        {
            user && <li className='uppercase'><Link href="/cart">cart</Link></li>
        }
        {
            user ? <li className='uppercase'><div onClick={handleSignOut}>Sign Out</div></li> : <li className='uppercase'><Link href="/login">sign in</Link></li>
        }
    </>
    return (
        <div className="navbar bg-black z-10 fixed bg-opacity-30 text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;