import useReview from '../hook/UseReview';
import ReviewInfo from '../ReviewInfo/ReviewInfo';

const Review = () => {
    const [reviews, setReviews] = useReview()
   
    return (
        <div>
            <h2 className='text-2xl'>Reviews</h2>
            <div className='mt-4 px-4  grid gap-4 grid-cols-1 md:grid-cols-2'>
            {
                
                reviews.map(review =><ReviewInfo key={review.id} review={review}></ReviewInfo>)
            }
            </div>
            
            
        </div>
    );
};

export default Review;