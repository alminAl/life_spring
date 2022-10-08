import React from 'react';
import { Link } from 'react-router-dom';
import courseList from '../../test/courses.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Courses = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        arrows: false,
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
        <div className='py-20'>
            <div className='space-y-10'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-extrabold font-sans uppercase'>
                        our <span className='text-[#106731]'>courses</span>
                    </h3>
                    <Link
                        to='/'
                        className='bg-[#106731] text-white  py-2 px-4 rounded-md capitalize font-mono inline-block hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black hover:duration-500'>
                        view all
                    </Link>
                </div>
                <Slider {...settings}>
                    {courseList.map((item) => {
                        const { id, image, title, lesson, hour, price } = item;
                        return (
                            <div key={id} className='my-3'>
                                <div className='mx-4 space-y-3 shadow-md drop-shadow-md rounded-md bg-white'>
                                    <div className='h-[180px]'>
                                        <img
                                            src={image}
                                            alt=''
                                            className='h-[180px] w-full rounded-tl-md rounded-tr-md'
                                        />
                                    </div>
                                    <div className='p-3 space-y-3'>
                                        <h3 className='overflow-auto h-[56px] capitalize font-semibold text-md lg:text-lg'>
                                            {title}
                                        </h3>
                                        <div className='flex justify-start font-semibold text-sm lg:text-lg'>
                                            <span className='mr-3'>
                                                {lesson} lessons
                                            </span>
                                            <span>{hour} hours</span>
                                        </div>
                                        <h3 className='block font-semibold text-sm lg:text-lg'>
                                            price: {price} tk.
                                        </h3>
                                        <Link
                                            to='/'
                                            className='bg-[#106731] text-white  py-2 px-4 rounded-md capitalize font-mono inline-block hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black hover:duration-500'>
                                            enroll now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Courses;
