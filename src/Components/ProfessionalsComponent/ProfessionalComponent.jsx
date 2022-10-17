import React, { useEffect, useState } from 'react';
import ProfessionalsCard from './ProfessionalsCard';
const ProfessionalComponent = () => {
    const [professional, setProfessionals] = useState([]);
    useEffect(() => {
        fetch(`./professionalsData.json`)
            .then((res) => res.json())
            .then((data) => setProfessionals(data));
    }, []);
    return (
        <div className='container mx-auto  p-8 mt-10'>
            <h1 className='font-bold text-2xl text-center'>
                Life Spring Professionals
            </h1>

            <div className=' flex flex-wrap -mx-4'>
                {professional.map((professionals) => (
                    <ProfessionalsCard
                        professionals={professionals}
                        key={professionals.id}></ProfessionalsCard>
                ))}
            </div>
        </div>
    );
};

export default ProfessionalComponent;
