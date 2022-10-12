import React from 'react';
import brand from '../../image/life_spring_logo.png';
import {
    FaFacebookF,
    FaYoutube,
    FaLinkedinIn,
    FaPhoneVolume,
    FaEnvelope
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footers = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-1 px-3.5 md:px-7 lg:px-14 xl:px-24 lg:space-x-20 md:space-x-0 md:space-y-5 py-20 bg-zinc-100'>
            <div className='space-y-5'>
                <img src={brand} alt='' className='w-48' />
                <p className='text-base md:text-lg'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.{' '}
                    <br />
                    Rerum autem esse, minima ducimus laborum accusantium. <br />{' '}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
                    <br />
                    Cumque, ipsa.
                </p>
                <div className='flex items-center space-x-5'>
                    <div className='flex justify-center items-center bg-[#0A66C2] rounded-full w-10 h-10'>
                        <a
                            href='https://www.facebook.com/lifespringinstitute/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <FaFacebookF className='text-xl text-white' />
                        </a>
                    </div>
                    <div className='flex justify-center items-center bg-[#f00c0c] rounded-full w-10 h-10'>
                        <a
                            href='https://www.youtube.com/channel/UCIhnNMshTmGQmkJaBLGe5aw'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <FaYoutube className='text-xl text-white' />
                        </a>
                    </div>
                    <div className='flex justify-center items-center bg-[#0A66C2] rounded-full w-10 h-10'>
                        <a
                            href='https://www.linkedin.com/company/lifespring/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <FaLinkedinIn className='text-xl text-white' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                <h3 className='uppercase font-extrabold text-xl text-[#106731]'>
                    quick link
                </h3>
                <div className='flex flex-col space-y-2 capitalize font-semibold'>
                    <Link to='/'>about us</Link>
                    <Link to='/'>course</Link>
                    <Link to='/'>news and blogs</Link>
                    <Link to='/'>trams of service</Link>
                </div>
            </div>
            <div className='space-y-4'>
                <h3 className='uppercase font-extrabold text-xl text-[#106731]'>
                    our address
                </h3>
                <div>
                    <span className='text-lg capitalize font-semibold'>
                        main branch
                    </span>
                    <p>
                        House # 55/2, Union Heights, Level # 6 & 14, <br /> West
                        Panthapath, Dhaka-1205, Bangladesh.
                    </p>
                </div>
                <div>
                    <span className='text-lg capitalize font-semibold'>
                        banani branch
                    </span>
                    <p>
                        House # 108, Road # 12, Block # E, <br /> Manama Urban
                        Forest Center, Level # 4, <br /> Banani, Dhaka-1213,
                        Bangladesh
                    </p>
                </div>
                <div className='space-y-2'>
                    <span className='flex items-center space-x-2'>
                        <FaPhoneVolume />
                        <span className='font-semibold'>: +88 123456789</span>
                    </span>
                    <span className='flex items-center space-x-2'>
                        <FaEnvelope />
                        <span className='font-semibold'>
                            : contact@lifespringint.com
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footers;
