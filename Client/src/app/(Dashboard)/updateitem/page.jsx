"use client"

import React from 'react';

const UpdateItem = () => {
    const handleUpdateItems = event => {
        event.preventDefault()
        const form = event.target;
        console.log('inside')
        const recipeName = form.recipeName.value
        const category = form.category.value
        const price = form.price.value
        const recipeDetails = form.recipeDetails.value
        const imageLink = form.imageLink.value
        console.log(recipeName, category, price, recipeDetails, imageLink)
    }
    return (
        <>
            <div className='text-4xl uppercase text-center mb-9'>update item</div>
            <form onSubmit={handleUpdateItems} className='w-3/5 h-flex bg-gray-200 '>
                <div className="form-control w-full">
                    <label className="label ml-9">
                        <span className="label-text text-xl">Recipe name*</span>
                    </label>
                    <input name='recipeName' type="text" placeholder="Recipe name" className="mt-5 ml-9 mr-9   px-2 py-2 h-20 input input-bordered w-flex" required/>
                </div>

                <div className='grid grid-cols-2 m-2 items-center'>
                    <div className='flex flex-col ml-9'>
                        <label className='mb-5 text-xl'>Category*</label>
                        <input name='category' type="text" placeholder="Category" className="h-20 input input-bordered w-full " required/>
                    </div>
                    <div className='flex flex-col ml-9'>
                        <label className='mb-5 text-xl'>Price*</label>
                        <input name='price' type="number" placeholder="Price" className="h-20 input input-bordered w-full " required/>
                    </div>
                </div>

                <div className="form-control w-full m-2">
                    <label className="label ml-9">
                        <span className="label-text text-xl">Recipe Details</span>
                    </label>
                    <input name='recipeDetails' type="text" placeholder="Recipe Details" className="mt-5 ml-9 mr-9 text-xl  px-2 py-2 h-40 text-center input input-bordered w-flex" required/>
                </div>

                <div className="form-control w-full m-2">
                    <label className="label ml-9">
                        <span className="label-text text-xl">Image Link*</span>
                    </label>
                    <input name='imageLink' type="text" placeholder="Image link" className="mt-5 ml-9 mr-9   px-2 py-2 h-16 input input-bordered w-flex" required/>
                </div>

                <input type="submit" value="Update Item" className='text-2xl text-center h-16 w-48 border flex mx-auto text-white m-5 px-10' style={{ backgroundColor: '#D1A054' }} required/>
            </form>
        </>
    );
};

export default UpdateItem;