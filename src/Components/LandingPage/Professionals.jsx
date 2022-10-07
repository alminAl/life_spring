import React from 'react';
import professionalList from '../../test/professional.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Professionals = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    background: '#2b2d42',
                    width: '40px',
                    height: '40px',
                    padding: '10px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    background: '#2b2d42',
                    width: '40px',
                    height: '40px',
                    padding: '10px',
                    borderRadius: '5px',
                    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
                }}
                onClick={onClick}
            />
        );
    }
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
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono uppercase'>
                        our{' '}
                        <span className='text-[#106731]'>professionals</span>
                    </h3>
                    <Link
                        to='/'
                        className='bg-[#106731] text-white  py-2 px-4 rounded-md capitalize font-mono inline-block hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black'>
                        view all
                    </Link>
                </div>
                <Slider {...settings}>
                    {professionalList.map((item) => {
                        const { id, image, professionalName, role } = item;
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
                                        <p className='text-[#106731] capitalize font-semibold text-base'>
                                            {role}
                                        </p>
                                        <h3 className='overflow-auto capitalize font-semibold text-md lg:text-lg'>
                                            {professionalName}
                                        </h3>

                                        <Link
                                            to='/'
                                            className='bg-[#106731] text-white  py-2 px-4 rounded-md capitalize font-mono inline-block hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black'>
                                            appointment
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

export default Professionals;
