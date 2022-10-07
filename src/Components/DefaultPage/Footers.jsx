import React from 'react';
import { Link } from 'react-router-dom';

const Footers = () => {
    return (
        <div className='bg-[#106731]'>
            <div className='py-20 px-3 sm:px-3.5 md:px-7 lg:px-14 xl:px-24 md:m-auto text-white lg:flex justify-between'>
                <div className='text-start'>
                    <div className='mb-6'>
                        <h3 className='font-bold text-2xl'>
                            LifeSpring Consultancy Limited
                        </h3>
                    </div>
                    <div className='mb-6'>
                        <h5 className='font-bold'>Main Branch</h5>
                        <p>
                            House # 55/2, Union Heights, Level # 6 &amp; 14,{' '}
                            <br /> West Panthapath, Dhaka-1205, Bangladesh.
                        </p>
                    </div>
                    <div className='mb-6'>
                        <h5 className='font-bold'>Banani Branch</h5>
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

                <div className='md:text-start sm:text-start'>
                    <div className='mb-6'>
                        <h3 className='font-bold text-2xl'>About</h3>
                    </div>
                    <div>
                        <Link
                            to='/'
                            className='block text-bold capitalize mb-2'>
                            about us
                        </Link>
                        <Link
                            to='/'
                            className='block text-bold capitalize mb-2'>
                            course
                        </Link>
                        <Link
                            to='/'
                            className='block text-bold capitalize mb-2'>
                            refund policy
                        </Link>
                        <Link
                            to='/'
                            className='block text-bold capitalize mb-2'>
                            privacy policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footers;
