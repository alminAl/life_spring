import React, { useState } from 'react';
import brand from '../../image/life_spring_logo.png';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                className='inline-block rounded-md ml-2 mt-2'>
                <MenuIcon className='text-black cursor-pointer block w-10 h-10' />
            </div>
            <div
                className={
                    open
                        ? 'w-72 bg-slate-800 h-screen py-4 space-y-10 block top-0 left-0 absolute'
                        : 'w-72 bg-slate-800 h-screen py-4 space-y-10 hidden'
                }>
                <div className='flex justify-between items-center px-4'>
                    <img src={brand} className='w-32' alt='' />
                    <CloseIcon
                        onClick={() => setOpen(!open)}
                        className='text-white cursor-pointer w-8 h-8'
                    />
                </div>
                <div className='list-none space-y-3 text-white uppercase text-lg'>
                    <li>
                        <Link to='' className='flex items-center pl-4'>
                            <HomeIcon className='mr-2' /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to='profile' className='flex items-center pl-4'>
                            <PersonIcon className='mr-2' /> Profile
                        </Link>
                    </li>
                    <li>
                        <Link to='courses' className='flex items-center pl-4'>
                            <SubscriptionsIcon className='mr-2' /> Courses
                        </Link>
                    </li>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
