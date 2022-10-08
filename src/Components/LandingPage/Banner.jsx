import React from 'react';
import { Link } from 'react-router-dom';
import banner_data from '../../test/bannerData.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className='mt-[75px]'>
            <div className='lg:flex lg:justify-around lg:items-center text-center bg-white py-20'>
                <div className='w-full lg:w-[45%] text-center lg:text-start space-y-10'>
                    <div className='space-y-2'>
                        <h1 className='font-sans text-[#106731] uppercase font-extrabold font-xl sm:text-3xl md:text-4xl lg:text-5xl block'>
                            welcome to life spring
                        </h1>
                        <p className='font-sans capitalize font-bold font-lg sm:text-xl lg:text-2xl'>
                            your best psychological advisor around the city
                        </p>
                    </div>
                    <div className='space-y-4 flex flex-col'>
                        <Link to='/'>
                            <button className='text-base uppercase text-white bg-[#106731] px-6 py-3 rounded-xl hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black hover:duration-500'>
                                book an appointment
                            </button>
                        </Link>

                        <Link to='/'>
                            <button className='w-[229px] text-base uppercase text-white bg-[#106731] px-6 py-3 rounded-xl hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black hover:duration-500'>
                                enroll course
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='lg:w-[55%] pt-10 sm:pt-10 lg:pt-0'>
                    <Carousel
                        autoPlay={true}
                        dynamicHeight={true}
                        infiniteLoop={true}
                        interval={5000}
                        transitionTime={10}
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}>
                        {banner_data.map((item) => {
                            const { id, title, image } = item;

                            return (
                                <div className='text-center space-y-4' key={id}>
                                    <h3 className='font-sans font-extrabold uppercase text-2xl text-[#106731]'>
                                        {title}
                                    </h3>
                                    <img src={image} alt='' />
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;
