import React from 'react';
import { FaUserLarge ,  } from "react-icons/fa6";

import { MdOutlineAdminPanelSettings } from "react-icons/md";

import { FaTrash } from "react-icons/fa6";

const Table = ({ headers, data }) => {
    console.log(data, headers)
    return (
        <div className="overflow-x-auto">
            <table className="table text-center mb-2">
                {/* head */}
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th className='text-2xl' key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='text-xl text-center'>
                    {/* row 1 */}
                    {data.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            {
                               user.user_role==='user' ?  <td> <FaUserLarge className='text-2xl ml-2'/>  </td> : <td> <MdOutlineAdminPanelSettings className='text-4xl ml-2'/>  </td>
                            }
                            <td><FaTrash className='text-2xl ml-4'/></td>
                        </tr>
                    ))}


                </tbody>



            </table>
        </div>
    );
};

export default Table;