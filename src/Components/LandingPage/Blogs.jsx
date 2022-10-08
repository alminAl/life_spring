import React from 'react';
import { Link } from 'react-router-dom';
import blogList from '../../test/blogData.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EastIcon from '@mui/icons-material/East';

const Blogs = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        cssEase: 'linear',
        arrows: false,
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
                            <div className='my-3' key={id}>
                                <div className='mx-4 space-y-3 shadow-md drop-shadow-md rounded-md bg-white'>
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
                                            className=' text-[#106731]  py-2 rounded-md capitalize font-mono inline-block hover:text-black hover:duration-500'>
                                            read more
                                            <EastIcon className='ml-2' />
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
