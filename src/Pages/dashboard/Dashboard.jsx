import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";


function LinkTab(props) {
    const navigate = useNavigate();
    const {href} = props

    return (
        <Tab
            component="a"
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
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                    <LinkTab label="Profile" href="/dashboard/profile" />
                    <LinkTab label="Page Two" href="/trash" />
                    <LinkTab label="Page Three" href="/spam" />
                </Tabs>
            </Box>


            <Outlet />
        </div>

    )
}

export default Dashboard