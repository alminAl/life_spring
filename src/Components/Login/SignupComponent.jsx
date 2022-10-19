import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup';
import brand from '../../image/life_spring_logo.png';

const SignupComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile_number, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [about, setAbout] = useState('');
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(name, email, mobile_number, about, password);
    };
    return (
        <div className='pt-28'>
            <div>
                <img
                    width='300px'
                    height='300px'
                    className='mx-auto '
                    src={brand}
                    alt={brand}
                />
            </div>
            <div className='flex justify-center items-center mt-5 mb-20'>
                <div className='card w-11/12 lg:w-2/5 md:w-2/4 bg-secondary shadow-xl rounded-lg'>
                    <div className='card-body p-5'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-control w-full my-4'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Your Name
                                    </span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='Enter Your Name'
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    className='input input-bordered w-full h-10 border-2 pl-1 rounded-lg'
                                    required
                                />
                            </div>
                            <div className='form-control w-full my-4'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Your Email
                                    </span>
                                </label>
                                <input
                                    type='email'
                                    placeholder='Enter Your Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className='input input-bordered w-full h-10 border-2 pl-1 rounded-lg'
                                    required
                                />
                            </div>
                            <div className='form-control w-full my-4'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Your Phone
                                    </span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='Enter Your Phone Number'
                                    onChange={(e) => setMobile(e.target.value)}
                                    value={mobile_number}
                                    className='input input-bordered w-full h-10 border-2 pl-1 rounded-lg'
                                    required
                                />
                            </div>
                            <div className='form-control w-full my-4'>
                                <label className='label'>
                                    <span className='label-text'>About</span>
                                </label>
                                <textarea
                                    type='text'
                                    placeholder='About'
                                    onChange={(e) => setAbout(e.target.value)}
                                    value={about}
                                    rows='4'
                                    cols='50'
                                    className='input input-bordered w-full h-10 border-2 pl-1 rounded-lg'
                                    required
                                />
                            </div>
                            <div className='form-control w-full my-4'>
                                <label className='label'>
                                    <span className='label-text'>Password</span>
                                </label>
                                <input
                                    type='password'
                                    placeholder='Enter Your Password'
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                    className='input input-bordered w-full h-10 border-2 pl-1 rounded-lg'
                                    required
                                />
                            </div>

                            <input
                                className='btn w-full cursor-pointer mt-5 border-2 text-white hover:text-[#106731] font-bold px-4 py-2 rounded-lg uppercase bg-[#106731] hover:border-[#106731] hover:bg-white duration-200'
                                disabled={isLoading}
                                type='submit'
                                value='Register'
                            />
                            {error && (
                                <div className='text-red-500'>{error}</div>
                            )}
                        </form>
                        <Link to='/login'>
                            <p className='text-lg lg:text-xl text-center font-bold mt-4'>
                                Beck to Login
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;
