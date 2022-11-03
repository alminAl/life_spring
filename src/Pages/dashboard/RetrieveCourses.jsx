import React, { useEffect, useState } from 'react';

const RetrieveCourses = () => {
    const [courses, setCourses] = useState([]);

    // GET COURSES
    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/api/courses/all`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
                console.log(data);
            });
    }, []);

    // DELETE COURSE
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `${process.env.REACT_APP_API_BASE_URL}/api/courses/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then((res) => res.json())
                .then((data) => {
                    alert('deleted successfully');
                    const remaining = items.filter((item) => item._id !== id);
                    window.location.reload();
                    setCourses(remaining);
                });
        }
    };

    return (
        <div>
            <div className='pt-28'>
                <h1 className='text-center text-2xl font-bold underline decoration-indigo-500 uppercase decoration-2 decoration-double'>
                    Retrieve Courses
                </h1>

                <div className='pt-10'>
                    <table className='table-auto hover:table-fixed border-collapse border border-slate-500'>
                        <thead>
                            <tr>
                                <th className='border border-slate-700'>Title</th>
                                <th className='border border-slate-700'>Photo</th>
                                <th className='border border-slate-700'>
                                    Description
                                </th>
                                <th className='border border-slate-700'>
                                    Duration
                                </th>
                                <th className='border border-slate-700'>
                                    Course Type
                                </th>
                                <th className='border border-slate-700'>Videos</th>
                                <th className='border border-slate-700'>Action</th>
                            </tr>
                        </thead>

                        {courses.map((course) => (
                            <tbody key={course._id}>
                                <tr className=''>
                                    <td className='border border-slate-700'>
                                        {course.title}
                                    </td>
                                    <td className='border border-slate-700'>
                                        <img
                                            src={
                                                course.cover_photo
                                                    ? course.cover_photo
                                                    : '...'
                                            }
                                            alt=''
                                        />
                                    </td>
                                    <td className='border border-slate-700'>
                                        {course.description}
                                    </td>
                                    <td className='border border-slate-700'>
                                        {course.duration}
                                    </td>
                                    <td className='border border-slate-700'>
                                        {course.course_type}
                                    </td>
                                    <td className='border border-slate-700'>
                                        {course.videos}
                                    </td>
                                    <td className='border border-slate-700'>
                                        <button
                                            onClick={() =>
                                                handleDelete(course._id)
                                            }
                                            className='btn w-full cursor-pointer border-2 text-black hover:text-amber-500 font-bold px-4 py-2 rounded-lg uppercase bg-yellow-300 hover:border-yellow-300 hover:bg-white duration-200'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RetrieveCourses;
