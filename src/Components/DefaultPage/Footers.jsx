import React from 'react';
import { Link } from 'react-router-dom';

const Footers = () => {
    return (
        <div className='bg-[#106731] px-3 sm:px-3.5 md:px-7 lg:px-14 xl:px-24'>
            <div className='py-20 text-white'>
                <div className='text-center space-y-6'>
                    <div className='mb-6'>
                        <h3 className='font-bold text-lg sm:text-xl md:text-2xl capitalize'>
                            LifeSpring Consultancy Limited
                        </h3>
                    </div>

                    <div className='flex justify-center items-center space-x-4 font-semibold capitalize text-yellow-400 text-lg'>
                        <Link to='/'>about us</Link>
                        <Link to='/'>course</Link>
                        <Link to='/'>refund policy</Link>
                        <Link to='/'>privacy policy</Link>
                    </div>

                    <div className='space-y-2'>
                        <h5 className='font-bold text-green-300'>
                            Main Branch
                        </h5>
                        <p>
                            House # 55/2, Union Heights, Level # 6 &amp; 14,{' '}
                            <br /> West Panthapath, Dhaka-1205, Bangladesh.
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <h5 className='font-bold text-green-300'>
                            Banani Branch
                        </h5>
                        <p>
                            House # 108, Road # 12, Block # E, Manama Urban
                            Forest Center, Level # 4, <br />
                            Banani, Dhaka-1213, Bangladesh.
                        </p>
                    </div>
                    <div>
                        <p>phone: +8809638 505 505</p>
                        <p>contact@lifespringint.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footers;
