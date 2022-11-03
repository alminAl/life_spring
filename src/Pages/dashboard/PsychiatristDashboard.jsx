import React from 'react';
import InsertCourses from './InsertCourses';
import RetrieveCourses from './RetrieveCourses';

const PsychiatristDashboard = () => {
    return (
        <div className='grid grid-cols-2 gap-3'>
            <div>
                <InsertCourses></InsertCourses>
            </div>
            <div>
                <RetrieveCourses></RetrieveCourses>
            </div>
        </div>
    );
};

export default PsychiatristDashboard;
