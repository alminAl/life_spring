import React from 'react';
import { Link } from 'react-router-dom';
import './ProfessionalsCard.css';
import EastIcon from '@mui/icons-material/East';
const ProfessionalsComponent = ({ professionals }) => {
    const { title, image, description, name, id } = professionals;
    return (
        <div className='w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4'>
            <div className='c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden'>
                <div className='relative pb-48 overflow-hidden'>
                    <img
                        className='absolute inset-0 h-full w-full object-cover'
                        src={image}
                        alt='card-images'
                    />
                </div>
                <div className='p-4'>
                    <span className='inline-block px-2 py-1 leading-none bg-green-100 text-green-900  font-semibold uppercase tracking-wide text-xs'>
                        {title}
                    </span>
                    <h2 className='mt-2 mb-2  font-bold'>{name}</h2>
                    <p className='text-sm'>{description}</p>
                    <div className='mt-3 flex items-center'>
                        <Link
                            to={`/professionals/bookAppointment/${id}`}
                            className='text-[#106731]  py-2 font-semibold text-lg capitalize font-mono inline-block hover:text-black'>
                            book appointment
                            <EastIcon className='ml-2' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalsComponent;
