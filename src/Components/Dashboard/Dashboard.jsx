import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
};

export default Dashboard;