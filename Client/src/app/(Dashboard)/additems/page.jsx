"use client"

import SectionTitle from '@/app/components/section-title/SectionTitle';
import { useAuth } from '@/app/providers/AuthProvider';
import React, { useState } from 'react';



const AddItems = () => {
    const [selectedOption, setSelectedOption] = useState('salad')
    const { user } = useAuth()

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    console.log(user)
    const handleAddItems = event => {
        event.preventDefault()
        const form = event.target;
        console.log('inside')
        const recipeName = form.recipeName.value
        const price = form.price.value
        const recipeDetails = form.recipeDetails.value
        const imageLink = form.imageLink.value
        const category = selectedOption
        const newRecipe = {
            name: recipeName,
            recipe: recipeDetails,
            image: imageLink,
            category: selectedOption,
            price: price
        }
        if (user) {
            // console.log(recipeName, category, price, recipeDetails, imageLink)
            fetch('http://localhost:5000/menu',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify( newRecipe)
            })
        }

    }
    return (
        <>
            <SectionTitle heading={'add an item'} subHeading={`---What's new?---`}></SectionTitle>
            <form onSubmit={handleAddItems} className='w-3/5 h-flex m-5 bg-gray-200 '>
                <div className="form-control w-full">
                    <label className="label ml-9">
                        <span className="label-text text-xl">Recipe name*</span>
                    </label>
                    <input name='recipeName' type="text" placeholder="Recipe name" className="mt-5 ml-9 mr-9 px-2 py-2 h-12 input input-bordered w-flex" required />
                </div>

                <div className='grid grid-cols-2 m-2 items-center'>
                    <div className='flex flex-col ml-9'>
                        <label className='mb-5 text-xl'>Category*</label>
                        <select className='h-12 px-5' id="selectBox" value={selectedOption} onChange={handleOptionChange} required>
                            <option value="salad">salad</option>
                            <option value="pizza">pizza</option>
                            <option value="soup">soup</option>
                            <option value="dessert">dessert</option>
                            <option value="dessert">dessert</option>
                            <option value="drinks">drinks</option>
                        </select>
                    </div>
                    <div className='flex flex-col ml-9'>
                        <label className='mb-5 text-xl'>Price*</label>
                        <input name='price' type="number" placeholder="Price" className="h-12 input input-bordered w-full " required />
                    </div>
                </div>

                <div className="form-control w-full m-2">
                    <label className="label ml-9">
                        <span className="label-text text-xl">Recipe Details</span>
                    </label>
                    <input name='recipeDetails' type="text" placeholder="Recipe Details" className="mt-5 ml-9 mr-9 text-xl  px-2 py-2 h-40 text-center input input-bordered w-flex" required />
                </div>

                <div className="form-control w-full m-2">
                    <label className="label ml-9">
                        <span className="label-text text-xl">Image Link*</span>
                    </label>
                    <input name='imageLink' type="text" placeholder="Image link" className="mt-5 ml-9 mr-9   px-2 py-2 h-16 input input-bordered w-flex" required />
                </div>

                <input type="submit" value="Add Item" className='text-2xl text-center h-16 w-48 border flex mx-auto text-white m-5 px-10' style={{ backgroundColor: '#D1A054' }} required />
            </form>
        </>
    );
};

export default AddItems;