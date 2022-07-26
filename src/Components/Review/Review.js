import React, { useEffect, useState } from 'react';
import ReviewInfo from '../ReviewInfo/ReviewInfo';

const Review = () => {
    const [reviews, setReviews] =useState([])
    useEffect(()=>{
        fetch('reviewData.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h2 className='text-xl'>Reviews</h2>
            <div className='mt-4 px-4  grid gap-4 grid-cols-1 md:grid-cols-2'>
            {
                
                reviews.map(review =><ReviewInfo key={review.id} review={review}></ReviewInfo>)
            }
            </div>
            
            
        </div>
    );
};

export default Review;