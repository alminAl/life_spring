import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetcher = async () => {
            const res = await fetch(`http://localhost:4000/api/courses/${id}`);
            const data = await res.json();
            setCourse(data.courses);
            console.log(course);
        };
        fetcher();
    }, []);
    return (
        <div className='grid grid-row-3 grid-flow-cols gap-4 p-12 bg-slate-600'>
            <Card>
                <CardMedia
                    component='img'
                    height='140'
                    image={course.image}
                    alt='image'
                />
                <div className='bg-lime-300'>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {course.professionalName}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {course.role}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};

export default CourseDetails;
