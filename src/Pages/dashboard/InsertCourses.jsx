import React, { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

const InsertCourses = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [course_type, setCourseType] = useState('');
    const [videos, setVideos] = useState('');
    const [cover_photo, setCover_photo] = useState('');
    const [duration, setDuration] = useState('');

    const { user } = useAuthContext();
    const token = user.token;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${process.env.REACT_APP_API_BASE_URL}/api/courses/`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                course_type,
                videos,
                cover_photo,
                duration
            })
        });
        const data = await response.json();
        e.target.reset();

        if (data) {
            console.log(data.message);
        } else {
            console.log(data.error);
        }
    };

    return (
        <div>
            <div className='pt-28'>
                <h1 className='text-center text-2xl font-bold underline decoration-indigo-500 uppercase decoration-2 decoration-double'>
                    Insert Courses
                </h1>
                <div className='flex w-full justify-center items-center mt-5 mb-20'>
                    <div className='card shadow-xl rounded-lg'>
                        <div className='card-body p-3'>
                            <form onSubmit={handleSubmit}>
                                <div className='form-control w-full my-4'>
                                    <label className='label'>
                                        <span className='label-text'>
                                            Enter Course Title
                                        </span>
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Enter Course Title'
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        value={title}
                                        className='input input-bordered w-full h-10 border-2 pl-1 rounded-lg'
                                        required
                                    />
                                </div>
                                <div className='form-control w-full my-4'>
                                    <label className='label'>
                                        <span className='label-text'>
                                            Enter Course Description
                                        </span>
                                    </label>
                                    <textarea
                                        type='text'
                                        placeholder='Enter Course Description'
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        value={description}
                                        className='input input-bordered w-full h-10 border-2 pl-1 rounded-lg'
                                        required
                                    />
                                </div>
                                <div className='form-control w-full my-4'>
                                    <label className='label'>
                                        <span className='label-text'>
                                            Enter Course Type
                                        </span>
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Enter Course Type'
                                        onChange={(e) =>
                                            setCourseType(e.target.value)
                                        }
                                        value={course_type}
                                        className='input input-bordered w-full h-10 border-2 pl-1 rounded-lg'
                                        required
                                    />
                                </div>
                                <div className='form-control w-full my-4'>
                                    <label className='label'>
                                        <span className='label-text'>
                                            Enter Course Duration
                                        </span>
                                    </label>
                                    <input
                                        type='number'
                                        placeholder='Enter Course Type'
                                        onChange={(e) =>
                                            setDuration(e.target.value)
                                        }
                                        value={duration}
                                        className='input input-bordered w-full h-10 border-2 pl-1 rounded-lg'
                                    />
                                </div>
                                <div className='form-control w-full my-4'>
                                    <label className='label'>
                                        <span className='label-text'>
                                            Enter Cover Photo
                                        </span>
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Enter Cover Photo'
                                        onChange={(e) =>
                                            setCover_photo(e.target.value)
                                        }
                                        value={cover_photo}
                                        rows='4'
                                        cols='50'
                                        className='input input-bordered w-full h-10 border-2 pl-1 rounded-lg'
                                    />
                                </div>
                                <div className='form-control w-full my-4'>
                                    <label className='label'>
                                        <span className='label-text'>
                                            Enter Videos
                                        </span>
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Enter Videos'
                                        onChange={(e) =>
                                            setVideos(e.target.value)
                                        }
                                        value={videos}
                                        className='input input-bordered w-full h-10 border-2 pl-1 rounded-lg'
                                    />
                                </div>

                                <input
                                    className='btn w-full cursor-pointer mt-5 border-2 text-white hover:text-[#106731] font-bold px-4 py-2 rounded-lg uppercase bg-[#106731] hover:border-[#106731] hover:bg-white duration-200'
                                    // disabled={isLoading}
                                    type='submit'
                                    value='Add Course'
                                />
                                {/* {error && (
                                <div className='text-red-500'>{error}</div>
                            )} */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsertCourses;
