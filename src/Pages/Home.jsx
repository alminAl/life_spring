import React from 'react';
import Banner from '../Components/LandingPage/Banner.jsx';
import Blogs from '../Components/LandingPage/Blogs.jsx';
import Courses from '../Pages/dashboard/Courses';
import Professionals from '../Components/LandingPage/Professionals.jsx';
import Services from '../Components/LandingPage/Services.jsx';
import Testimonial from '../Components/LandingPage/Testimonial.jsx';

const Home = () => {
    return (
        <>
            <Banner />
            <Courses />
            <Professionals />
            <Services />
            <Testimonial/>
            <Blogs/>
        </>
    );
};

export default Home;
