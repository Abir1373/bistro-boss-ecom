"use client"

import React, { useState } from 'react';
import { Tabs, Tab, Card, CardBody, CardHeader, } from "@nextui-org/react";
import TabCard from './TabCard';

const TabPage = ({ menu, category }) => {
  let desserts = menu.filter(dessert => dessert.category === "dessert")
  let drinks = menu.filter(drink => drink.category === "drinks")
  let pizzas = menu.filter(pizza => pizza.category === "pizza")
  let salads = menu.filter(salad => salad.category === "salad")
  let soups = menu.filter(soup => soup.category === "soup")

  const [selected, setSelected] = useState(category)



  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        className='flex mx-auto text-2xl space-y-4'
      >
        <Tab className='' key="salads" title="SALADS">
          <Card className='mx-auto'>
            <CardBody>
              <div className='grid grid-cols-3 gap-4 items-center'>
                {salads.map(data => <TabCard data={data} key={data._id}></TabCard>)}
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="pizzas" title="PIZZAS">
          <Card>
            <CardBody>
              <div className='grid grid-cols-3 gap-4'>
                {pizzas.map(data => <TabCard data={data} key={data._id}></TabCard>)}
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="soups" title="SOUPS">
          <Card>
            <CardBody>
              <div className='grid grid-cols-3 gap-4'>
                {soups.map(data => <TabCard data={data} key={data._id}></TabCard>)}
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="desserts" title="DESSERTS">
          <Card>
            <CardBody>
              <div className='grid grid-cols-3 gap-4'>
                {desserts.map(data => <TabCard data={data} key={data._id}></TabCard>)}
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="drinks" title="DRINKS">
          <Card>
            <CardBody>
              <div className='grid grid-cols-3 gap-4'>
                {drinks.map(data => <TabCard data={data} key={data._id}></TabCard>)}
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabPage;