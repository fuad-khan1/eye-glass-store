import React from 'react';
import { BeakerIcon,StarIcon } from '@heroicons/react/solid'


const ReviewInfo = ({review}) => {
    return (
        <div className='bg-gray-300 rounded p-4 '>
            <p>Name: {review.name}</p>
            <p>Rating: {review.rating}<small><StarIcon className='h-2 w-2'></StarIcon></small> </p>
            <p>Id: {review.id}</p>
        </div>
    );
};

export default ReviewInfo;