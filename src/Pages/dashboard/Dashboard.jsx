/* eslint-disable no-undef */
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useProfileStore from '../../store/useProfileStore';
import shallow from 'zustand/shallow';

function LinkTab(props) {
    const navigate = useNavigate();
    const { href } = props;

    const [userProfile] = useProfileStore(
        (state) => [state.userProfile],
        shallow
    );
    console.log(userProfile);
    return (
        <Tab
            component='a'
            onClick={(event) => {
                event.preventDefault();
                navigate(href);
            }}
            {...props}
        />
    );
}

const Dashboard = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='pt-28 lg:w-9/12 m-auto space-y-6 px-4'>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='nav tabs example'>
                    <LinkTab label='Profile' href='/dashboard/profile' />

                    { userProfile?.isPsychiatrist && (
                        <LinkTab
                            label='Psychiatrist Dashboard'
                            href='psychiatristDashboard'
                        />
                    )}
                </Tabs>
            </Box>

            <Outlet />
        </div>
    );
};

export default Dashboard;
