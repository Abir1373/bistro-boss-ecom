'use client'
import Table from '@/app/(Dashboard)/allusers/Table';
import loadAllUser from '@/app/pages/utils/loadAllUsers';
import React from 'react';

const AllUsers = () => {
    let [users] = loadAllUser()
    const TableHeadUser = ['name','email','role','action'] 
    if(users===null) <span className="loading loading-spinner loading-lg"></span>
    // else console.log(users)
    else return (
        <Table headers={TableHeadUser} data={users}></Table>
    );
};

export default AllUsers;