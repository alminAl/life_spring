import React from 'react';
import { Link } from 'react-router-dom';
import blogList from '../../test/blogData.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Blogs = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 700,
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
                <h3 className='text-xl sm:text-2xl lg:text-3xl font-extrabold font-sans uppercase'>
                    health <span className='text-[#106731]'>blogs</span>
                </h3>
                <Slider {...settings}>
                    {blogList.map((item) => {
                        const { id, image, blogTitle, blogDetail } = item;
                        const detailSlice = blogDetail.slice(0, 200);
                        return (
                            <div className='my-3'>
                                <div
                                    className='mx-4 space-y-3 shadow-md drop-shadow-md rounded-md bg-white'
                                    key={id}>
                                    <div className='h-[250px]'>
                                        <img
                                            src={image}
                                            alt=''
                                            className='h-[250px] w-full rounded-tl-md rounded-tr-md'
                                        />
                                    </div>
                                    <div className='p-3 space-y-3'>
                                        <h3 className='overflow-auto capitalize text-lg sm:text-xl md:text-md lg:text-xl xl:text-xl font-bold h-[60px]'>
                                            {blogTitle}
                                        </h3>

                                        <p className='font-semibold'>
                                            {detailSlice}
                                        </p>
                                        <Link
                                            to='/'
                                            className='bg-[#106731] text-white  py-2 px-4 rounded-md capitalize font-mono inline-block hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black'>
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

export default Blogs;
