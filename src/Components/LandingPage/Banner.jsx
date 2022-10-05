import React from 'react';
import { Link } from 'react-router-dom';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import banner_data from '../../test/bannerData.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className='mt-[75px]'>
            <div className='lg:flex lg:justify-around lg:items-center text-center px-[100px] bg-white py-20'>
                <div className='lg:w-[40%]'>
                    <div className='text-center'>
                        <h1 className='mb-5 font-mono uppercase font-bold lg:text-5xl md:text-2xl sm:text-lg block'>
                            welcome to life spring
                        </h1>
                        <p className='my-5 font-mono capitalize text-2xl'>
                            your best psychological advisor around the city
                        </p>
                    </div>
                    <Link to='/'>
                        <button className='w-[265px] text-center border-2 bg-[#106731] border-[#106731] rounded-lg py-3 px-4 uppercase font-semi-bold text-white block my-3 m-auto hover:bg-white hover:text-black hover:border-black'>
                            book an appointment
                            <span className='ml-2'>
                                <PanToolAltIcon />
                            </span>
                        </button>
                    </Link>
                    <Link to='/'>
                        <button className='w-[260px] text-center border-2 bg-[#106731] border-[#106731] rounded-lg py-3 px-4 uppercase font-semi-bold text-white block my-3 m-auto hover:bg-white hover:text-black hover:border-black'>
                            enroll course
                            <span className='ml-2'>
                                <PlayLessonIcon />
                            </span>
                        </button>
                    </Link>
                </div>
                <div className='lg:w-[55%] '>
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
                                <div className='text-center' key={id}>
                                    <h3 className='mb-5 font-mono uppercase font-bold lg:text-3xl md:text-2xl sm:text-lg block'>
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
