import React from 'react';
import { useLocation } from 'react-router-dom';
import Footers from '../Components/DefaultPage/Footers.jsx';
import NavBar from '../Components/DefaultPage/NavBar.jsx';
import ScrollTop from '../Components/DefaultPage/ScrollTop.jsx';

const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <>
            {location.pathname.includes('dashboard') || <NavBar />}

            <main
                className={
                    location.pathname.includes('dashboard') ||
                    'px-3.5 md:px-7 lg:px-14 xl:px-24 bg-white'
                }>
                {children}
            </main>
            {location.pathname.includes('dashboard') || <Footers />}
            <ScrollTop />
        </>
    );
};

export default Layout;
