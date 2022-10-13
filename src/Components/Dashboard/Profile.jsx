import React from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className='lg:w-9/12 m-auto space-y-6 px-4'>
            <div className='text-center space-y-2'>
                <img
                    src='https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg'
                    alt=''
                    className='inline-block m-auto w-32 h-32 rounded-full md:w-48 md:h-48 md:rounded-full'
                />
                <p className='capitalize text-xl font-extrabold'>
                    mamun hosssain
                </p>
                <p className='capitalize text-lg font-bold'>admin</p>
            </div>
            <div>
                <table className='table-auto m-auto'>
                    <tbody>
                        <tr>
                            <td className='py-2 pr-10 capitalize font-extrabold'>
                                Full Name
                            </td>
                            <td className='py-2 capitalize font-semibold'>
                                Mamun Hossain
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 pr-10 capitalize font-extrabold'>
                                email
                            </td>
                            <td className='py-2 font-semibold'>
                                hmamun492@gmail.com
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 pr-10 capitalize font-extrabold'>
                                password
                            </td>
                            <td className='py-2 font-semibold'>admin@100</td>
                        </tr>
                        <tr>
                            <td className='py-2 pr-10 capitalize font-extrabold'>
                                mobile
                            </td>
                            <td className='py-2 font-semibold'>0123654789</td>
                        </tr>
                        <tr>
                            <td className='py-2 pr-10 capitalize font-extrabold'>
                                about
                            </td>
                            <td className='py-2 font-semibold'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. <br /> Vel molestias minus
                                iste dicta molestiae eos quis perferendis
                                reiciendis ad! Odio?
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='text-center py-10'>
                <Link
                    to='/'
                    className='text-base uppercase text-white bg-[#106731] px-6 py-3 rounded-xl hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black hover:duration-500'>
                    <BorderColorIcon className='mr-2' />
                    edit profile
                </Link>
            </div>
        </div>
    );
};

export default Profile;
