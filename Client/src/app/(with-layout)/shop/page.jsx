"use client"
import ItemImage from '@/app/pages/shared/item-image/ItemImage';
import React from 'react';
import useMenu from '@/app/pages/utils/loadMenu';
import TabPage from './tab/TabPage';


const Shop = () => {
    const mainFont = "our shop"
    const subFont = "would you like to try a dish ? "
    const pagename = 'shop'
    const [menu] = useMenu()
    return (
        <div>
            <ItemImage mainFont={mainFont} subFont={subFont} pageName={pagename}></ItemImage>
            <TabPage menu={menu} category="salads"></TabPage>
        </div>
    );
};

export default Shop;