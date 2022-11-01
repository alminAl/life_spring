import { useState } from 'react';
import useProfileStore from '../../store/useProfileStore';
import shallow from 'zustand/shallow';
import ProfileUpdateModal, {
    ProfileImage
} from '../../Components/Profile/ProfileUpdateModal';
import { Link } from 'react-router-dom';

// main component
const Profile = () => {
    // global storage
    const [userProfile] = useProfileStore(
        (state) => [state.userProfile],
        shallow
    );

    const [open, setOpen] = useState(false);

    return (
        <div className='pt-28 lg:w-9/12 m-auto space-y-6 px-4'>
            <div className='text-start py-10'>
                <button className='text-base uppercase text-white bg-slate-700 px-6 py-3 rounded-xl hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black hover:duration-500'>
                    <Link to='/psychiatristDashboard'>
                        {' '}
                        Psychiatrist Dashboard
                    </Link>
                </button>
            </div>
            <div className='lg:w-9/12 m-auto space-y-6 px-4'>
                <div className='text-center space-y-2'>
                    <ProfileImage />
                    <p className='capitalize text-xl font-extrabold'>
                        {userProfile?.name}
                    </p>
                </div>
                <div>
                    <table className='table-auto m-auto'>
                        <tbody>
                            <tr>
                                <td className='py-2 pr-10 capitalize font-extrabold'>
                                    Full Name
                                </td>
                                <td className='py-2 capitalize font-semibold'>
                                    {userProfile?.name}
                                </td>
                            </tr>
                            <tr>
                                <td className='py-2 pr-10 capitalize font-extrabold'>
                                    Email
                                </td>
                                <td className='py-2 font-semibold'>
                                    {userProfile?.email}
                                </td>
                            </tr>

                            <tr>
                                <td className='py-2 pr-10 capitalize font-extrabold'>
                                    mobile
                                </td>
                                <td className='py-2 font-semibold'>
                                    {userProfile?.mobile_number}
                                </td>
                            </tr>
                            <tr>
                                <td className='py-2 pr-10 capitalize font-extrabold'>
                                    about
                                </td>
                                <td className='py-2 font-semibold'>
                                    {userProfile?.about}
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
                    <button
                        onClick={() => setOpen(!open)}
                        className='text-base uppercase text-white bg-[#106731] px-6 py-3 rounded-xl hover:bg-white hover:text-black hover:border-black hover:ring-2 hover:ring-black hover:duration-500'>
                        Edit Profile
                    </button>
                </div>
            </div>
            {userProfile && (
                <ProfileUpdateModal open={open} setOpen={(x) => setOpen(x)} />
            )}
        </div>
    );
};

export default Profile;
