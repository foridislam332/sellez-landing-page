import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Main = () => {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    );
};

export default Main;