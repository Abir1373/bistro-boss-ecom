"use client"
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const AddReview = () => {

    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };


    const handleReview = event => {
        event.preventDefault()
        const form = event.target
        const recipe = form.recipe.value 
        const suggestion = form.suggestion.value 
        const careTalk = form.careTalk.value 
        console.log(recipe,suggestion,careTalk,rating)
    }

    return (
        <div className='w-3/4 h-flex flex flex-col items-center justify-center bg-slate-100'>
            <h1 className='uppercase m-9 text-2xl font-bold'>rate us!</h1>
            <div className='flex flex-row m-5'>
                {[1, 2, 3, 4, 5].map((starKey) => (
                    <FaStar
                        key={starKey}
                        onClick={() => handleRatingChange(starKey)}
                        color={starKey <= rating ? 'gold' : 'gray'}
                        className='text-4xl mr-2'
                    />
                ))}
            </div>

            <form onSubmit={handleReview} className='w-3/4'>
                {/* recipe you like most */}
                <div className='w-full justify-center space-y-5 items-left justify-center flex flex-col m-9'>
                    <label className='text-xl'>Which recipe you liked most?</label>
                    <input type="text" name="recipe" id="recipe" className='h-16 border w-3/4 px-5 py-2' placeholder='Recipe you liked most' />
                </div>
                {/* Do you have any suggestion for us? */}
                <div className='w-full justify-center space-y-5 items-left justify-center flex flex-col m-9'>
                    <label className='text-xl'>Do you have any suggestion for us?</label>
                    <input type="text" name="suggestion" id="suggestion" className='h-16 border w-3/4 px-5 py-2' placeholder='Sugggestion' />
                </div>
                {/* Kindly express your care in a short way. */}
                <div className='w-full justify-center space-y-5 items-left justify-center flex flex-col m-9'>
                    <label className='text-xl'>Kindly express your care in a short way.</label>
                    <input type="text" name="careTalk" id="careTalk" className='h-52 border w-3/4 px-5 py-2' placeholder='Review in detail' />
                </div>

                <input type="submit" value="Send Review" className='text-2xl h-14 border px-2 py-2 m-9' />
            </form>

        </div>
    );
};

export default AddReview;