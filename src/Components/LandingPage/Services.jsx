import React from 'react';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';

const Services = () => {
    const serviceLength = [1, 2, 3];
    return (
        <div className='py-20'>
            <div className='space-y-10'>
                <h3 className='text-xl sm:text-2xl lg:text-3xl font-extrabold font-sans uppercase'>
                    our <span className='text-[#106731]'>services</span>
                </h3>
                <div className='flex lg:flex-row gap-4'>
                    {serviceLength.map((item) => {
                        return (
                            <div
                                className='sm:basis-2/6 lg:basis-3/6 space-y-3 shadow-md drop-shadow-md rounded-md bg-white text-center'
                                key={item}>
                                <div className='h-[220px]'>
                                    <img
                                        src='https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/01/a.png'
                                        alt=''
                                        className='h-[220px] w-full rounded-tl-md rounded-tr-md'
                                    />
                                </div>
                                <div className='p-3'>
                                    <h3 className='overflow-auto capitalize font-semibold text-md lg:text-xl'>
                                        corporate services
                                    </h3>
                                </div>

                                <div className='border-t'>
                                    <Link
                                        to='/'
                                        className='py-4 px-4 rounded-b-md capitalize font-mono block font-semibold text-md md:text-lg hover:bg-[#106731] hover:text-white hover:duration-500'>
                                        learn more
                                        <EastIcon className='ml-3' />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;
