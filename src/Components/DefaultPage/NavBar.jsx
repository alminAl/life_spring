import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import brand from '../../image/life_spring_logo.png.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    let Links = [
        { name: 'PROFESSIONALS', link: '/professionals' },
        { name: 'SERVICE', link: '/' },
        { name: 'COURSE', link: '/' },
        { name: 'BLOGS', link: '/' },
        { name: 'TESTIMONIAL', link: '/' },
        { name: 'LOGIN/REGISTER', link: '/login' }
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className=' w-full fixed top-0 left-0 z-10'>
            <div className='font-bold font-mono lg:flex items-center justify-between bg-white py-2 px-3 sm:px-3.5 md:px-7 lg:px-14 xl:px-24'>
<<<<<<< HEAD
                <div>
                   <Link to="/">
                   <span>
                        <img src={brand} alt='brand img' className='w-44' />
                    </span>
                   </Link>
                </div>
=======
                <Link to='/'>
                    <span>
                        <img src={brand} alt='brand img' className='w-44' />
                    </span>
                </Link>
>>>>>>> c4d92cd780d449f6817ba9fe42442a47bfc39a3f

                <div
                    onClick={() => setOpen(!open)}
                    className='text-4xl absolute right-8 top-4 cursor-pointer lg:hidden'>
                    {open ? <CloseIcon /> : <MenuIcon />}
                </div>

                <ul
                    className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
<<<<<<< HEAD
                        open ? 'top-20 ' : 'top-[-490px]'
=======
                        open ? 'top-16' : 'top-[-490px]'
>>>>>>> c4d92cd780d449f6817ba9fe42442a47bfc39a3f
                    }`}>
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className='lg:ml-8 text-base lg:my-0 my-7'>
                            <Link
                                to={link.link}
                                className={`${
                                    link.name === 'LOGIN/REGISTER'
                                        ? 'border-2 text-[#106731] border-[#106731] px-4 py-2 rounded-lg uppercase hover:text-white hover:bg-[#106731] duration-200'
                                        : 'text-[#106731] duration-500 hover:text-black'
                                }`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
