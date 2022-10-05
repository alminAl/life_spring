import React from 'react';
import clientFeedback from '../../test/feedback.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Testimonial = () => {
    const settings = {
        fade: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        cssEase: 'linear'
    };
    return (
        <div className='py-20 bg-white'>
            <div className='lg:mx-48 md:mx-20'>
                <div className=' flex justify-between items-center mb-10'>
                    <h3 className='text-3xl font-bold font-mono uppercase'>
                        clients <span className='text-[#106731]'>feedback</span>
                    </h3>
                    <Link
                        to='/'
                        className='border-[#106731] border-2 bg-[#106731] text-white  py-2 px-4 rounded-md capitalize font-mono hover:bg-white hover:text-black hover:border-black'>
                        view all
                    </Link>
                </div>
                <Slider {...settings}>
                    {clientFeedback.map((item) => {
                        const { id, image, clientName, review } = item;
                        // const detailSlice = blogDetail.slice(0, 200);
                        return (
                            <div>
                                <div
                                    className='mx-4 my-2 bg-white text-center'
                                    key={id}>
                                    <div className='h-[100px] w-[100px] m-auto rounded-full'>
                                        <img
                                            src={image}
                                            alt=''
                                            className='h-[100px] w-[100px] rounded-full'
                                        />
                                    </div>
                                    <div className='2xl:6/12 xl:w-8/12 lg:w-8/12 m-auto'>
                                        <h3 className='overflow-auto text-xl font-bold my-3'>
                                            {clientName}
                                        </h3>
                                        <p>{review}</p>
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

export default Testimonial;
