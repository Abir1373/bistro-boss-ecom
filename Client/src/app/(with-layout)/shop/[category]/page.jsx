"use client"
import ItemImage from '@/app/pages/shared/item-image/ItemImage';
import React, { useEffect, useState } from 'react';
import TabPage from '../tab/TabPage';
import useMenu from '@/app/pages/utils/loadMenu';


const ShopCategory = ({ params }) => {
    let category = params.category||"salads"
    const mainFont = "our shop"
    const subFont = "would you like to try a dish ? "
    const pagename = 'shop'

    const [menu] = useMenu()

    return (
        <div>
            <ItemImage mainFont={mainFont} subFont={subFont} pageName={pagename}></ItemImage>
            <TabPage menu={menu} category={category}></TabPage>
        </div>
    );

};

export default ShopCategory;