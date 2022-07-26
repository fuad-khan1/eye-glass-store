import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-4 mx-auto px-4  '>
            <div className=' mr-4 order-2 md:order-1'>
            <h4 className='text-4xl font-bold font-sans text-orange-300'> Welcome to Eye-Glass center. </h4> 
          <h4 className='text-2xl font-bold text-blue-200'>We care you and your eyes </h4> 
            </div>
            <div  className='order-1 md:order-2'>
                <img className='h-[350px] w-[350px]' src="eyeGlass.jpg" alt="" />
            </div>
         
        </div>
        <button className='font-bold text-white bg-slate-600 py-2  px-4 rounded mt-5'>
            See All Reviews
        </button>

        </div>
    );
};

export default Home;