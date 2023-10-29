"use client"
import React from 'react';
import PIECHART from './PIECHART';
import BARCHART from './BARCHART';

const AdminHome = () => {
    return (
        <div className='flex flex-row'>

            <BARCHART></BARCHART>

            <PIECHART></PIECHART>

        </div>
    );
};

export default AdminHome;