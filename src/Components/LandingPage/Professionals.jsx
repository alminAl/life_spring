import React, { useState } from 'react';
import professionalList from '../../test/professional.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EastIcon from '@mui/icons-material/East';

const Professionals = () => {
    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        // autoplaySpeed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        arrow: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='py-20 bg-white'>
            <div className='space-y-10'>
                <div className=' flex justify-between items-center'>
                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-extrabold font-sans uppercase'>
                        our{' '}
                        <span className='text-[#106731]'>professionals</span>
                    </h3>
                    <Link
                        to='/'
                        className='bg-[#106731] text-white  py-2 px-4 rounded-md capitalize font-mono inline-block hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black hover:duration-500'>
                        view all
                    </Link>
                </div>
                <Slider ref={setSliderRef} {...settings}>
                    {professionalList.map((item) => {
                        const { id, image, professionalName, role } = item;
                        return (
                            <div key={id} className='my-3'>
                                <div className='mx-3 space-y-3 shadow-md drop-shadow-md rounded-md bg-white'>
                                    <div className='h-[180px]'>
                                        <img
                                            src={image}
                                            alt=''
                                            className='h-[180px] w-full rounded-tl-md rounded-tr-md'
                                        />
                                    </div>
                                    <div className='p-3 space-y-3'>
                                        <p className='text-[#106731] capitalize font-semibold text-base'>
                                            {role}
                                        </p>
                                        <h3 className='overflow-auto capitalize font-semibold text-md lg:text-lg'>
                                            {professionalName}
                                        </h3>

                                        <Link
                                            to='/'
                                            className='bg-white text-[#106731]  py-2 font-semibold text-lg capitalize font-mono inline-block hover:text-black hover:origin-right hover:translate-x-2 hover:duration-500'>
                                            appointment
                                            <EastIcon className='ml-2' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
                <div className='flex justify-end items-center space-x-3'>
                    <button
                        className='bg-[#106731] text-white  py-2 px-4 rounded-md capitalize font-mono inline-block hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black hover:duration-500'
                        onClick={sliderRef?.slickPrev}>
                        <ArrowBackIcon />
                    </button>
                    <button
                        className='bg-[#106731] text-white  py-2 px-4 rounded-md capitalize font-mono inline-block hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black hover:duration-500'
                        onClick={sliderRef?.slickNext}>
                        <ArrowForwardIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Professionals;
