import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Courses = () => {
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        const fetcher = async () => {
            const res = await fetch('http://localhost:4000/api/courses/');
            const data = await res.json();
            setCourseList(data.courses);
        };
        fetcher();
    }, []);

    return (
        <div className='grid grid-cols-5 grid-flow-row gap-4 p-12'>
            {courseList.map((course) => (
                <Card key={course._id}>
                    <CardMedia
                        component='img'
                        height='140'
                        image={course.image}
                        alt='image'
                    />
                    <div className=''>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='div'>
                                {course.professionalName}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                {course.role}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' className='font-bold'>
                                <Link to={`/courses/${course._id}`}>Learn More</Link>
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default Courses;
