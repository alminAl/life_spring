import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import brand from '../../image//life_spring_logo.png'
import { useLogin } from '../../hooks/useLogin';

const LoginComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }
    return (
        <div className='pt-28'>
            <div>
                <img width='300px' height='300px' className='mx-auto ' src={brand} alt={brand} />
            </div>
            <div className='flex justify-center items-center mt-5 mb-20'>
                <div className="card w-11/12 lg:w-2/5 md:w-2/4 bg-secondary shadow-xl rounded-lg">
                    <div className="card-body p-5">
                        <form onSubmit={handleSubmit}>

                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />
                            </div>
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Your Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />
                            </div>

                            <input className='btn w-full mt-5 cursor-pointer border-2 text-white hover:text-[#106731] font-bold px-4 py-2 rounded-lg uppercase bg-[#106731] hover:border-[#106731] hover:bg-white duration-200' disabled={isLoading} type="submit" value="Login" />
                            <Link to='/'><p className='text-center font-bold'>Forget your Password?</p></Link>
                            {error && <div className="text-red-500">{error}</div>}
                        </form>
                        <p className='text-lg lg:text-xl font-bold mt-4'>Don't have an account?</p>
                        <button className='btn w-full cursor-pointer mt-5 border-2 text-[#106731] border-[#106731] font-bold px-4 py-2 rounded-lg uppercase hover:text-white hover:bg-[#106731] duration-200' disabled={isLoading}><Link to='/signup'>Register</Link></button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default LoginComponent;