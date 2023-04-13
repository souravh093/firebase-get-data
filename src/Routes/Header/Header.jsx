import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-gray-300 p-10 flex gap-10'>
            <Link className='text-lg hover:text-gray-700' to='/'>Home</Link>
            <Link className='text-lg hover:text-gray-700' to='/login'>Login</Link>
            <Link className='text-lg hover:text-gray-700' to='/register'>Register</Link>
            <Link className='text-lg hover:text-gray-700' to='/register2'>Register2</Link>
            <Link className='text-lg hover:text-gray-700' to='/registertailwind'>Register-From-TailwindCSS</Link>
        </nav>
    );
};

export default Header;