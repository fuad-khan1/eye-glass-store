import React from 'react';
import useReview from '../hook/UseReview';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReview()
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-4 mx-auto px-4  '>
            <div className=' mr-4 order-2 md:order-1'>
            <h4 className='text-4xl font-bold font-sans text-orange-300'> Welcome to Eye-Glass center. </h4> 
          <h4 className='text-2xl font-bold text-blue-200'>We care you and your eyes </h4>
          <p>We sell high quality eye-glasses, sun-glasses. We are doing our business with trust of the customers.</p> 
            </div>
            <div  className='order-1 md:order-2 my-4 '>
                <img className='h-[350px] w-[350px]' src="eyeGlass.jpg" alt="" />
            </div>
         
        </div>
        <div>
            <h1 className='text-xl py-5 my-4 font-bold'>Customer Review</h1>
            <div>
            {
                reviews.map(review =><ReviewInfo key={review.id} review={review}></ReviewInfo>)
            }
            </div>
                
        </div>
        <div className='my-6'>
        <Link  to='/review' className='font-bold text-white bg-slate-600 py-2 px-4 rounded mt-5'>
            See All Reviews
        </Link>
        </div>
        


        </div>
    );
};

export default Home;