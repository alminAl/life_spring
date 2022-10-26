
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const EnrollModal = ({ open, setOpen }) => {
    return (
        <div>



            <div >

                <Dialog

                    fullWidth
                    maxWidth="sm"
                    open={open}
                    onClose={() => setOpen(!open)}

                >
                    <DialogTitle>
                        Are you sure to enroll the course?
                    </DialogTitle>


                    <DialogActions>
                        <Button className=" rounded px-4 py-2 text-white  bg-red-400 " onClick={() => setOpen(!open)}>No</Button>
                        {/* <Link to="/login">Yes</Link> */}
                        <Button
                            className=" rounded px-4 py-2 text-white  bg-green-400 "
                        ><Link to="/login">Yes</Link></Button>

                    </DialogActions>

                </Dialog>
            </div>



        </div>
    );
};

export default EnrollModal;