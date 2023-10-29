"use client";
import SectionTitle from '@/app/components/section-title/SectionTitle';
import React, { useState } from 'react';
import MenuItem from './menu-item/MenuItem';
import useMenu from '@/app/pages/utils/loadMenu';



const PopularMenu = () => {
   const [menu] = useMenu() ; 
   const popularMenus = menu.filter(item=>item.category==="popular")
    return (
        <div>
            <SectionTitle heading="From Our Menu" subHeading="Popular Items" ></SectionTitle>
            <div className="grid grid-cols-2 gap-4 " > 
                {
                    popularMenus.map(item=><MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;