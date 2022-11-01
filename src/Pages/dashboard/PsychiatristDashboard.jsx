import React, {  useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

const PsychiatristDashboard = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [course_type, setCourseType] = useState('');
    const [videos, setVideos] = useState('');
    const [cover_photo, setCover_photo] = useState('');

    const { user } = useAuthContext();
    const token =user.token

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `${process.env.REACT_APP_API_BASE_URL}/api/courses/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token ,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                course_type,
                videos,
                cover_photo
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    e.target.reset('');
                    // window.location.reload();
                }
                else{
                    console.log(data.error.message)
                }
            });
    };
    return (
        <div>
            <div className='pt-28'>
                <div className='flex justify-center items-center mt-5 mb-20'>
                    <div className='card w-11/12 lg:w-2/5 md:w-2/4 bg-secondary shadow-xl rounded-lg'>
                        <div className='card-body p-5'>
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
                                        type='email'
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
                                        type='password'
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

export default PsychiatristDashboard;
