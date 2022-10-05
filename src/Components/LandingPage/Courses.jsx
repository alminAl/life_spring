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
            <div className='lg:px-48 md:px-20'>
                <div className='flex justify-between items-center mb-10'>
                    <h3 className='text-3xl font-bold font-mono uppercase'>
                        our <span className='text-[#106731]'>courses</span>
                    </h3>
                    <Link
                        to='/'
                        className='border-[#106731] border-2 bg-[#106731] text-white  py-2 px-4 rounded-md capitalize font-mono hover:bg-white hover:text-black hover:border-black'>
                        view all
                    </Link>
                </div>
                <Slider {...settings}>
                    {courseList.map((item) => {
                        const { id, image, title, lesson, hour, price } = item;
                        return (
                            <div key={id}>
                                <div className='mx-4 my-2 shadow-md shadow-[rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px] rounded-md bg-white'>
                                    <div className='h-[180px]'>
                                        <img
                                            src={image}
                                            alt=''
                                            className='h-[180px] w-full rounded-tl-md rounded-tr-md'
                                        />
                                    </div>
                                    <div className='p-3'>
                                        <h3 className='overflow-auto text-lg font-bold my-2 h-[56px]'>
                                            {title}
                                        </h3>
                                        <div className='flex justify-start font-semibold'>
                                            <span className='mr-3'>
                                                {lesson} lessons
                                            </span>
                                            <span>{hour} hours</span>
                                        </div>
                                        <h3 className='my-4 block font-semibold'>
                                            price: {price} tk.
                                        </h3>
                                        <Link
                                            to='/'
                                            className='border-[#106731] border-2 bg-[#106731] text-white  py-2 px-4 rounded-md capitalize font-mono inline-block hover:bg-white hover:text-black hover:border-black'>
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
