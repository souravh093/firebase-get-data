import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Header />
            <div className='flex justify-center min-h-screen items-center'>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;