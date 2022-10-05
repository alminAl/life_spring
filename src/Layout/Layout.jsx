import React from 'react';
import Footers from '../Components/DefaultPage/Footers.jsx';
import NavBar from '../Components/DefaultPage/NavBar.jsx';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main>{children}</main>
            <Footers />
        </div>
    );
};

export default Layout;
