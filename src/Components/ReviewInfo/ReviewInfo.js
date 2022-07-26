import React from 'react';


const ReviewInfo = ({review}) => {
    return (
        <div className='bg-gray-300 rounded p-4 '>
            <p className='font-bold'>Name: {review.name}</p>
            <p>Rating: {review.rating} </p>
            <p>Review: {review.Review}</p>
        </div>
    );
};

export default ReviewInfo;