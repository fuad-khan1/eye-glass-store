import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='pb-6 pt-3 sticky top-0 bg-gray-200'>
            
            <Link className='mr-6' to='/home'>Home</Link>
            <Link className='mr-6' to='/review'>Review</Link>
            <Link className='mr-6' to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;