import React from 'react';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';

const Services = () => {
    const serviceLength = [1, 2, 3];
    return (
        <div className='py-20'>
            <div className='lg:mx-48 md:mx-20'>
                <h3 className='text-3xl font-bold font-mono uppercase mb-10'>
                    our <span className='text-[#106731]'>services</span>
                </h3>
                <div className='flex flex-wrap justify-between'>
                    {serviceLength.map((item) => {
                        return (
                            <div className='w-[30%] my-2 shadow-md shadow-[rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px] rounded-md bg-white'>
                                <div className='h-[220px]'>
                                    <img
                                        src='https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/01/a.png'
                                        alt=''
                                        className='h-[220px] w-full rounded-tl-md rounded-tr-md'
                                    />
                                </div>
                                <div className='p-3 text-center'>
                                    <h3 className='overflow-auto text-2xl font-bold my-3'>
                                        corporate services
                                    </h3>
                                </div>

                                <div className='border-t text-center '>
                                    <Link
                                        to='/'
                                        className='py-4 px-4 rounded-b-md capitalize font-mono block font-semibold text-lg hover:bg-slate-400'>
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
