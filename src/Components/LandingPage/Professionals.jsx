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
            <div className='lg:mx-48 md:mx-20'>
                <div className=' flex justify-between items-center mb-10'>
                    <h3 className='text-3xl font-bold font-mono uppercase'>
                        our{' '}
                        <span className='text-[#106731]'>professionals</span>
                    </h3>
                    <Link
                        to='/'
                        className='border-[#106731] border-2 bg-[#106731] text-white  py-2 px-4 rounded-md capitalize font-mono hover:bg-white hover:text-black hover:border-black'>
                        view all
                    </Link>
                </div>
                <Slider {...settings}>
                    {professionalList.map((item) => {
                        const { id, image, professionalName, role } = item;
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
                                        <p>{role}</p>
                                        <h3 className='overflow-auto text-lg font-bold my-3'>
                                            {professionalName}
                                        </h3>

                                        <Link
                                            to='/'
                                            className='border-[#106731] border-2 bg-[#106731] text-white  py-2 px-4 rounded-md capitalize font-mono inline-block mt-3 hover:bg-white hover:text-black hover:border-black'>
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
