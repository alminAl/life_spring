import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import defaultImage from '../../image/default.jpeg';

const Courses = () => {
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        const fetcher = async () => {
            const res = await fetch(
                `${process.env.REACT_APP_API_BASE_URL}/api/courses/all`
            );
            const data = await res.json();
            setCourseList(data);
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
                        image={course.image ? course.image : defaultImage}
                        alt='image'
                    />
                    <div className=''>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='div'>
                                {course.title}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                {course.description}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                {course.duration}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' className='font-bold'>
                                <Link to={`/courses/${course._id}`}>
                                    Learn More
                                </Link>
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default Courses;
