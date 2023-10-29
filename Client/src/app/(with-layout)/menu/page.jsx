import ItemImage from '@/app/pages/shared/item-image/ItemImage';
import React from 'react';

import MenuOffer from './menu-offer/MenuOffer';
import Desserts from './desserts/Desserts';
import Soups from './soups/Soups';
import Salads from './salads/Salads';
import Pizzas from './pizzas/Pizzas';

const Menu = () => {
    const mainFont = "OUR MENU";
    const subFont = "Would you like to try a dish?";
    const pageName = 'menu'
    return (
        <div>
            <ItemImage pageName={pageName} mainFont={mainFont} subFont={subFont}></ItemImage>
            <MenuOffer></MenuOffer>
            <Desserts></Desserts>
            <Pizzas></Pizzas>
            <Salads></Salads>
            <Soups></Soups>
        </div>
    );
};

export default Menu;