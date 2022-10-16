import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const BookAppointment = () => {
    const { professionalsId } = useParams();
    const [professional, setProfessionals] = useState([]);
    useEffect(() => {
        fetch(`/professionalsData.json`)
            .then((res) => res.json())
            .then((data) => setProfessionals(data));
    }, [professionalsId]);
    const Appointment = professional.filter((sr) => sr.id === professionalsId);
    //     console.log(Appointment);

    return (
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <div
                className='container px-5 py-24 mx-auto'
                style={{ cursor: 'auto' }}>
                <div className='lg:w-4/5 mx-auto flex flex-wrap'>
                    <img
                        alt='professionals_pic'
                        className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg'
                        src={Appointment[0]?.image}
                        style={{ cursor: 'auto' }}
                    />
                    <div
                        className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'
                        style={{ cursor: 'auto' }}>
                        <h2
                            className='text-md title-font text-gray-900 tracking-widest'
                            style={{ cursor: 'auto' }}>
                            {Appointment[0]?.title}
                        </h2>
                        <h1
                            className='text-gray-900 text-3xl title-font font-medium mb-1'
                            style={{ cursor: 'auto' }}>
                            {Appointment[0]?.name}
                        </h1>

                        <p className='leading-relaxed mb-2'>
                            {Appointment[0]?.description}
                        </p>

                        <div className='flex'>
                            <span className='title-font font-medium text-3xl text-gray-900'></span>
                            <button className='flex ml-auto text-white bg-[#106731] border-0 py-2 px-6 focus:outline-none hover:bg-[#043919] rounded'>
                                Book Appointment
                            </button>
                        </div>
                        <Link to='/professionals'>
                            <div className='flex'>
                                <span className='title-font font-medium text-3xl text-gray-900'></span>
                                <button className='flex ml-auto text-white bg-[#B4C424] border-0 py-2 px-6 focus:outline-none hover:bg-[#808000] rounded mt-5'>
                                    Back to Professionals
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;
