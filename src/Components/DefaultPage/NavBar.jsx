import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import brand from '../../image/life_spring_logo.png';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import { Avatar, MenuItem } from '@mui/material';
import useProfileStore from '../../store/useProfileStore';
import shallow from "zustand/shallow";

const NavBar = () => {
    // glabal storage
     const [userProfile] = useProfileStore(
        (state) => [state.userProfile],
        shallow
    );

    const [open, setOpen] = useState(false);
    const { logout } = useLogout();
    const { user } = useAuthContext();

    let Links = [
        { name: 'PROFESSIONALS', link: '/professionals' },
        { name: 'SERVICE', link: '/' },
        { name: 'COURSE', link: '/' },
        { name: 'TESTIMONIAL', link: '/' },
        { account: 'LOGIN/REGISTER', link: '/login' }
    ];

    

    return (
        <div className=' w-full fixed top-0 left-0 z-10'>
            <div className='font-bold font-mono lg:flex items-center justify-between bg-white py-2 px-3 sm:px-3.5 md:px-7 lg:px-14 xl:px-24'>
                <Link to='/'>
                    <span>
                        <img src={brand} alt='brand img' className='w-44' />
                    </span>
                </Link>

                <div
                    onClick={() => setOpen(!open)}
                    className='text-4xl absolute right-8 top-4 cursor-pointer lg:hidden'>
                    {open ? <CloseIcon /> : <MenuIcon />}
                </div>

                <ul
                    className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'
                        }`}>
                    {Links.map((link) => (
                        <li
                            key={link.name || link.account}
                            className='lg:ml-6 text-base lg:my-0 my-7'>
                            {user ? (
                                <Link
                                    to={link.link}
                                    className='text-[#106731] duration-500 hover:text-black'>
                                    {link.name}
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        to={link.link}
                                        className='text-[#106731] duration-500 hover:text-black'>
                                        {link.name}
                                    </Link>
                                    <Link
                                        to={link.link}
                                        className={
                                            link.account === 'LOGIN/REGISTER'
                                                ? 'border-2 text-[#106731] border-[#106731] px-4 py-2 rounded-lg uppercase hover:text-white hover:bg-[#106731] duration-200'
                                                : 'text-[#106731] duration-500 hover:text-black'
                                        }>
                                        {link.account}
                                    </Link>
                                </>
                            )}
                        </li>
                    ))}

                    {user && userProfile && (
                        <>
                            <Link to={"/dashboard/profile"}>
                                <MenuItem className='hover:bg-transparent'>
                                    <Avatar alt={userProfile?.name} src={userProfile?.profile_image ? userProfile?.profile_image : "#"} /> <span>{userProfile?.name}</span>
                                </MenuItem>
                            </Link>
                            <li className='lg:flex items-center space-x-3 text-base lg:my-0 my-7'>
                                <span className='text-base  text-black font-sans'></span>
                                <button
                                    onClick={() => logout()}
                                    className='border-2 text-[#106731] border-[#106731] px-4 py-2 rounded-lg uppercase hover:text-white hover:bg-[#106731] duration-200'>
                                    logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div >
    );
};

export default NavBar;
