import React from 'react';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <div className=' py-7 mb-5 sticky top-0 bg-slate-200 '>
            
            <CustomLink className='mr-6' to='/home'>Home</CustomLink>
            <CustomLink className='mr-6' to='/review'>Review</CustomLink>
            <CustomLink className='mr-6' to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </div>
    );
};

export default Header;